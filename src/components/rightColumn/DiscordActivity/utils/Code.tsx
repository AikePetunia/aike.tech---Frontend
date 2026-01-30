import { formatTimeDisplay, resolveActivityImage } from "../../../../utils/discordUtils";
import { CustomStatus } from "./CustomStatus";
import type { Activity } from "../../../../types/discord";

interface CodeProps {
  Activity: Activity | null;
  emojiUrl: string | null;
  statusText: string | null;
}


export function Code({ Activity, emojiUrl, statusText }: CodeProps) {
  const appId = Activity?.application_id ?? "";
  const largeImg = resolveActivityImage(appId, Activity?.assets?.large_image);

  return (
    <>
      <div className="image-container">
        <img
          className="activity-image"
          src={largeImg || undefined}
          alt={Activity?.details || ""}
        />
        {CustomStatus ? (
          <CustomStatus
            emojiUrl={emojiUrl ?? null}
            statusText={statusText ?? null}
          />
        ) : null}
      </div>
      <div className="activity-container">
        <h3 className="activity-detail ">{Activity?.details}</h3>
        <h6 className="activity-state ">{Activity?.state}</h6>
        <span className="activity-time ">
          {formatTimeDisplay(Activity?.timestamps?.start ?? undefined)}
        </span>
      </div>
    </>
  );
}

export default Code;
