import { redirect } from 'next/navigation';
import { JobService } from '@/api/services/JobService';
import CareersJobPage from '@/components/templates/CareersJobPage';
import { HOMEPAGE_ROUTE } from '@/utils/constants/routes';

const CareersJob = async ({ params: { id } }: { params: { id: string } }) => {
  const job = await JobService.getJobById(id);

  if (!job) {
    return redirect(HOMEPAGE_ROUTE);
  }

  return <CareersJobPage job={job} />;
};

export default CareersJob;
