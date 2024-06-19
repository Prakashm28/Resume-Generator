import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalDetails = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input {...register('name', { required: 'Name is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" {...register('email', { required: 'Email is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input type="tel" {...register('phone', { required: 'Phone is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input {...register('address', { required: 'Address is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <input type="date" {...register('dob', { required: 'Date of Birth is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Marital Status</label>
        <select {...register('maritalStatus', { required: 'Marital Status is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        {errors.maritalStatus && <p className="text-red-500 text-xs mt-1">{errors.maritalStatus.message}</p>}
      </div>
      <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md">Next</button>
    </form>
  );
};

export default PersonalDetails;
