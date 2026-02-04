import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';


const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { id } = useParams();



    const navigate = useNavigate();


    const { isPending, data: parcelInfo = {} } = useQuery({
        queryKey: ['parcels', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`)
            return res.data;

        }
    })

    if (isPending) {
        return 'loading............'
    }


    console.log(parcelInfo);
    const amount = parcelInfo.parcelWeight;
    const amountInCents = amount * 100;
    console.log(amountInCents);




    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);

            //step-2: create payment intent 
            const res = await axiosSecure.post('/create-payment-intent', {
                amountInCents,
                id
            })

            const clientSecret = res.data.clientSecret;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },

                }
            });
            

            if (result.error) {
                setError(result.error.message);
            } else {
                setError('');
                if (result.paymentIntent.status === 'succeeded') {
                    console.log('Payment succeeded!!!!');

                    const transactionId = result.paymentIntent.id;

                    const paymentData = {
                        id,
                        email: user.email,
                        amount,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }

                    const paymentRes = await axiosSecure.post('/payment', paymentData);
                    if (paymentRes.data.insertedId) {
                        console.log('Payment done successfully')
                        Swal.fire({
                            title: "Payment Successful!",
                            // text: "Your parcel has been marked as paid.",
                            html: `<strong>Transaction ID:</strong><code>${transactionId}</code>`,
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Go to my parcels"
                        });

                        navigate('/dashboard/myParcels')

                    }



                    // const paymentStatus = await axiosSecure.get(`/payment/${id}`);
                    // setIsPaid(paymentStatus.data.isPaid);

                    // return paymentStatus.data;



                }
            }

            console.log('res from intent', res)
        }








    };








    return (
        <div className='p-12  bg-white text-black rounded'>
            <h1 className='text-4xl mb-8'>Payment </h1>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-8 cursor-pointer text-3xl font-semibold  bg-info px-8 py-2 hover:bg-amber-600 rounded-2xl' type="submit" disabled={!stripe}>
                    Pay ${amount}
                </button>

                



                {
                    error && <p className='text-red-500'>{error}</p>
                }
            </form>
        </div>
    );
};

export default PaymentForm;