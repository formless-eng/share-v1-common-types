import { IUserPreferences, IVDRSerializable } from "./Interfaces";
import { Dictionary, NotificationEvent } from "./Types";

export class UserPreferences
  implements IUserPreferences, IVDRSerializable
{
  enableEmailNotifications: boolean = true;
  enablePushNotifications: boolean = true;
  enableNotificationsEvents: NotificationEvent[] = [
    NotificationEvent.Transaction,
    NotificationEvent.SplitTransaction,
    NotificationEvent.PublicRelease,
  ];

  fromVDRFormattedDictionary(entry: Dictionary): UserPreferences {
    this.enableEmailNotifications =
      entry.enable_email_notifications as boolean;
    this.enablePushNotifications =
      entry.enable_push_notifications as boolean;

    // Support legacy integer enum values which were
    // previously order dependent.
    this.enableNotificationsEvents =
      //   @ts-ignore
      entry.enable_notifications_events.map(
        (event_type: string | number) => {
          switch (event_type) {
            case 0:
              return NotificationEvent.Transaction;

            case 1:
              return NotificationEvent.SplitTransaction;

            default:
              return event_type;
          }
        }
      );
    return this;
  }

  toVDRFormattedDictionary(): Dictionary {
    return {
      enable_email_notifications: this.enableEmailNotifications,
      enable_push_notifications: this.enablePushNotifications,
      //   @ts-ignore
      enable_notifications_events: this.enableNotificationsEvents,
    };
  }
}
