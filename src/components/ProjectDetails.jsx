import React from 'react';
import { useForm } from 'react-hook-form';

const ProjectDetails = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Project Title</label>
        <input {...register('projectTitle', { required: 'Project Title is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.projectTitle && <p className="text-red-500 text-xs mt-1">{errors.projectTitle.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea {...register('description', { required: 'Description is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>
      <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md">Generate PDF</button>
    </form>
  );
};

export default ProjectDetails;
