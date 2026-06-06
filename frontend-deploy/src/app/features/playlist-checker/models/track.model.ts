export interface Track {
  videoId: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  isUnavailable: boolean;
  unavailableReason: string;
  statusDetails?: string;
  isSafeToRemove?: boolean;
  playlistItemId?: string;
  isDeleting?: boolean;
  isDeleted?: boolean;
  position?: number;
}
