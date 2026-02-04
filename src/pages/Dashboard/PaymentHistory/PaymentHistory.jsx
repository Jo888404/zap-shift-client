import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';




// const formateDate = (iso)=> new Date(iso).toLocaleString()

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { isPending, data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${user.email}`);
            return res.data;
        }
    })

    if (isPending) {
        return <span>Loading...</span>
    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Parcel ID</th>
                            <th>Email</th>
                            <th>Amount ($)</th>
                            <th>Method</th>
                            <th>Transaction ID</ th>
                            <th>Paid At</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments?.map((pay, index) => (
                            <tr key={pay._id}>
                                <td>{index + 1}</td>
                                <td>{pay._id}</td>
                                <td>{user.email}</td>
                                <td>{pay.amount}</td>
                                <td>{pay.paymentMethod}</td>
                                <td className="text-xs">{pay.transactionId}</td>
                                <td>{new Date(pay.paid_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;