import { JobService } from '@/api/services/JobService';
import CareersJobPage from '@/components/templates/CareersJobPage';

const CareersJob = async ({ params: { id } }: { params: { id: string } }) => {
  const job = await JobService.getJobById(id);
  return <CareersJobPage job={job} />;
};

export default CareersJob;
