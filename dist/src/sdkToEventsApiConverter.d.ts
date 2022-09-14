import { SDKEvent, SDKConsentState, SDKGDPRConsentState, SDKGeoLocation, SDKCCPAConsentState, SDKProduct, SDKPromotion, SDKUserIdentity, SDKProductActionType, MParticleWebSDK, SDKIdentityTypeEnum } from './sdkRuntimeModels';
import * as EventsApi from '@mparticle/event-models';
export declare function convertEvents(mpid: string, sdkEvents: SDKEvent[], mpInstance: MParticleWebSDK): EventsApi.Batch | null;
export declare function convertConsentState(sdkConsentState?: SDKConsentState): EventsApi.ConsentState | null;
export declare function convertGdprConsentState(sdkGdprConsentState: SDKGDPRConsentState): {
    [key: string]: EventsApi.GDPRConsentState | null;
};
export declare function convertCcpaConsentState(sdkCcpaConsentState: SDKCCPAConsentState): {
    data_sale_opt_out: EventsApi.CCPAConsentState;
};
export declare function convertUserIdentities(sdkUserIdentities?: SDKUserIdentity[]): EventsApi.BatchUserIdentities | null;
export declare function convertEvent(sdkEvent: SDKEvent): EventsApi.BaseEvent | null;
export declare function convertProductActionType(actionType: SDKProductActionType): EventsApi.ProductActionActionEnum;
export declare function convertProductAction(sdkEvent: SDKEvent): EventsApi.ProductAction | null;
export declare function convertProducts(sdkProducts: SDKProduct[]): EventsApi.Product[] | null;
export declare function convertPromotionAction(sdkEvent: SDKEvent): EventsApi.PromotionAction | null;
export declare function convertPromotions(sdkPromotions: SDKPromotion[]): EventsApi.Promotion[] | null;
export declare function convertImpressions(sdkEvent: SDKEvent): EventsApi.ProductImpression[] | null;
export declare function convertShoppingCart(sdkEvent: SDKEvent): EventsApi.ShoppingCart | null;
export declare function convertCommerceEvent(sdkEvent: SDKEvent): EventsApi.CommerceEvent;
export declare function convertCrashReportEvent(sdkEvent: SDKEvent): EventsApi.CrashReportEvent;
export declare function convertAST(sdkEvent: SDKEvent): EventsApi.ApplicationStateTransitionEvent;
export declare function convertSessionEndEvent(sdkEvent: SDKEvent): EventsApi.SessionEndEvent;
export declare function convertSessionStartEvent(sdkEvent: SDKEvent): EventsApi.SessionStartEvent;
export declare function convertPageViewEvent(sdkEvent: SDKEvent): EventsApi.ScreenViewEvent;
export declare function convertOptOutEvent(sdkEvent: SDKEvent): EventsApi.OptOutEvent;
export declare function convertCustomEvent(sdkEvent: SDKEvent): EventsApi.CustomEvent;
export declare function convertSdkEventType(sdkEventType: number): EventsApi.CustomEventDataCustomEventTypeEnum | EventsApi.CommerceEventDataCustomEventTypeEnum;
export declare function convertBaseEventData(sdkEvent: SDKEvent): EventsApi.CommonEventData;
export declare function convertSDKLocation(sdkEventLocation: SDKGeoLocation): EventsApi.GeoLocation;
export declare function convertUserAttributeChangeEvent(sdkEvent: SDKEvent): EventsApi.UserAttributeChangeEvent | null;
export declare function convertUserIdentityChangeEvent(sdkEvent: SDKEvent): EventsApi.UserIdentityChangeEvent | null;
export declare function convertUserIdentityTypeToServerIdentityType(identityType: SDKIdentityTypeEnum): EventsApi.IdentityType;
