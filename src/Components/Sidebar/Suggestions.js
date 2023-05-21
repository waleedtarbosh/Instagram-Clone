/* eslint-disable no-nested-ternary */
import SuggestedProfile from './SuggestedProfile';

export default function Suggestions() {
  const profiles = [
    {
      docId: '4',
      username: 'orwell',
      userId: '4',
    },
    {
      docId: '3',
      username: 'dali',
      userId: '3',
    }
  ];

  return (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile key={profile.docId} profile={profile} />
        ))}
      </div>
    </div>
  );
}
