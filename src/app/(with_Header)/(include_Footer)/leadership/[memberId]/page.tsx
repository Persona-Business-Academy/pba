'use client';
import { useParams } from 'next/navigation';
import LeadershipIndividualPage from '@/components/templates/IndividualLeadershipPage';
import { exLeadershipData, MemberType } from '@/types/member';

export default function LeadershipIndividual() {
  const params: { memberId: string } | null = useParams();

  const member = exLeadershipData.find(
    (teamMember: MemberType) => teamMember.id === +(params?.memberId || 1),
  );

  return member && <LeadershipIndividualPage member={member} />;
}
