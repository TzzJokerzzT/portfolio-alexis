import type { PersonalInformationListResponse } from "@/app/shared/api/types";

type ContactDetailsProps = {
  basic?: PersonalInformationListResponse["basic"];
  contact?: PersonalInformationListResponse["contact"];
};

export const ContactDetails = ({ basic, contact }: ContactDetailsProps) => {
  const email = basic?.email ?? "";
  const contactUrl = contact?.[0]?.url ?? "";

  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 skew-x-[-5deg] items-center justify-center bg-p5-red">
          <svg
            className="h-5 w-5 skew-x-[5deg] text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Email icon"
          >
            <title>Email</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm tracking-wider text-gray-500 uppercase">
            Email
          </p>
          <a
            href={contactUrl}
            className="text-white transition-colors hover:text-p5-red"
          >
            {email}
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 skew-x-[-5deg] items-center justify-center bg-p5-red">
          <svg
            className="h-5 w-5 skew-x-[5deg] text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Location icon"
          >
            <title>Location</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm tracking-wider text-gray-500 uppercase">
            Location
          </p>
          <p className="text-white">Cartagena de Indias, Colombia</p>
        </div>
      </div>
    </div>
  );
};
