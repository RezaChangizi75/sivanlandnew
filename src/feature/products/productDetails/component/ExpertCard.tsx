import Image from "next/image";

interface ExpertCardProps {
  name?: string;
  role?: string;
  phone?: string;
  avatarUrl?: string;
}

export function ExpertCard({
  name = "وحید نصیری",
  role = "کارشناس فروش",
  phone = "021 91013939",
  avatarUrl,
}: ExpertCardProps) {
  return (
    <aside className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
          {avatarUrl ? (
            // using next/image if provided
            <Image src={avatarUrl} alt={name} width={64} height={64} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11c1.657 0 3-1.343 3-3S17.657 5 16 5s-3 1.343-3 3 1.343 3 3 3zM4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>

        <div>
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="inline-block bg-yellow-500 text-white text-xs px-3 py-2 rounded-md"
          >
            تماس
          </a>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-600">
        برای کسب اطلاعات بیشتر و مشاوره فنی با کارشناس تماس بگیرید.
      </p>
    </aside>
  );
}
