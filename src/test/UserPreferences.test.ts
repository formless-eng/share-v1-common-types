import { UserPreferences } from "./../lib/UserPreferences";
import { NotificationEvent } from "./../lib/Types";

describe("UserPreferences", () => {
  let userPreferences: UserPreferences;

  beforeEach(() => {
    userPreferences = new UserPreferences();
  });

  it("should initialize with default values", () => {
    expect(userPreferences.enableEmailNotifications).toBe(true);
    expect(userPreferences.enablePushNotifications).toBe(true);
    expect(userPreferences.enableNotificationsEvents).toEqual([
      NotificationEvent.Transaction,
      NotificationEvent.SplitTransaction,
    ]);
  });

  it("should correctly populate properties from a VDR formatted dictionary", () => {
    const entry = {
      enable_email_notifications: true,
      enable_push_notifications: true,
      enable_notifications_events: [
        NotificationEvent.Transaction,
        NotificationEvent.SplitTransaction,
      ],
    };

    // @ts-ignore
    userPreferences.fromVDRFormattedDictionary(entry);

    expect(userPreferences.enableEmailNotifications).toBe(true);
    expect(userPreferences.enablePushNotifications).toBe(true);
    expect(userPreferences.enableNotificationsEvents).toEqual([
      NotificationEvent.Transaction,
      NotificationEvent.SplitTransaction,
    ]);
  });

  it("should correctly convert to a VDR formatted dictionary", () => {
    userPreferences.enableEmailNotifications = false;
    userPreferences.enablePushNotifications = false;
    userPreferences.enableNotificationsEvents = [
      NotificationEvent.Transaction,
    ];

    const dictionary = userPreferences.toVDRFormattedDictionary();

    expect(dictionary).toEqual({
      enable_email_notifications: false,
      enable_push_notifications: false,
      enable_notifications_events: [NotificationEvent.Transaction],
    });
  });
});
