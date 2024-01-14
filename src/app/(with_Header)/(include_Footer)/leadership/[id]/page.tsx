'use client';
import { redirect } from 'next/navigation';
import LeadershipIndividualPage from '@/components/templates/IndividualLeadershipPage';
import { MemberType, pbaTeam } from '@/types/member';
import { LEADERSHIP_ROUTE } from '@/utils/constants/routes';

export default function LeadershipIndividual({ params }: { params: { id: string } }) {
  const member = pbaTeam.find((teamMember: MemberType) => teamMember.id === +params.id);

  if (!member) {
    redirect(LEADERSHIP_ROUTE);
  }

  return member ? <LeadershipIndividualPage member={member} /> : null;
}
