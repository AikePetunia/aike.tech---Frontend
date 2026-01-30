import {
  formatTimeDisplay,
  resolveActivityImage,
} from "../../../../utils/discordUtils";
import { CustomStatus } from "./CustomStatus";
import type { Activity } from "../../../../types/discord";

interface ObsidianProps {
  Activity: Activity | null;
  emojiUrl: string | null;
  statusText: string | null;
}

export function Obsidian({ Activity, emojiUrl, statusText }: ObsidianProps) {
  const appId = Activity?.application_id ?? "";
  const logo = resolveActivityImage(appId, Activity?.assets?.large_image);

  return (
    <>
      <div className="image-container">
        <img
          className="activity-image"
          src={logo || undefined}
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
        <h6 className="activity-detail">{Activity?.details}</h6>
        <h3 className="activity-state ">{Activity?.state}</h3>
        <span className="activity-time ">
          {formatTimeDisplay(Activity?.timestamps?.start ?? undefined)}
        </span>
      </div>
    </>
  );
}

export default Obsidian;
