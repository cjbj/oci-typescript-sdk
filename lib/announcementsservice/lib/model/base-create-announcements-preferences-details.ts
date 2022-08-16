/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The model for the parameters of announcement email preferences configured for the tenancy (root compartment).
 */
export interface BaseCreateAnnouncementsPreferencesDetails {
  /**
   * A Boolean value to indicate whether the specified compartment chooses to not to receive informational announcements by email.
   * (Manage preferences for receiving announcements by email by specifying the `preferenceType` attribute instead.)
   *
   */
  "isUnsubscribed"?: boolean;
  /**
   * The OCID of the compartment for which you want to manage announcement email preferences. (Specify the tenancy by providing the
   * root compartment OCID.)
   *
   */
  "compartmentId"?: string;
  /**
   * The string representing the user's preference, whether to opt in to only required announcements, to opt in to all announcements, including informational announcements, or to opt out of all announcements.
   */
  "preferenceType": BaseCreateAnnouncementsPreferencesDetails.PreferenceType;

  "type": string;
}

export namespace BaseCreateAnnouncementsPreferencesDetails {
  export enum PreferenceType {
    OptInTenantAnnouncements = "OPT_IN_TENANT_ANNOUNCEMENTS",
    OptInTenantAndInformationalAnnouncements = "OPT_IN_TENANT_AND_INFORMATIONAL_ANNOUNCEMENTS",
    OptOutAllAnnouncements = "OPT_OUT_ALL_ANNOUNCEMENTS"
  }

  export function getJsonObj(obj: BaseCreateAnnouncementsPreferencesDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "CreateAnnouncementsPreferencesDetails":
          return model.CreateAnnouncementsPreferencesDetails.getJsonObj(
            <model.CreateAnnouncementsPreferencesDetails>(<object>jsonObj),
            true
          );
        case "UpdateAnnouncementsPreferencesDetails":
          return model.UpdateAnnouncementsPreferencesDetails.getJsonObj(
            <model.UpdateAnnouncementsPreferencesDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BaseCreateAnnouncementsPreferencesDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "CreateAnnouncementsPreferencesDetails":
          return model.CreateAnnouncementsPreferencesDetails.getDeserializedJsonObj(
            <model.CreateAnnouncementsPreferencesDetails>(<object>jsonObj),
            true
          );
        case "UpdateAnnouncementsPreferencesDetails":
          return model.UpdateAnnouncementsPreferencesDetails.getDeserializedJsonObj(
            <model.UpdateAnnouncementsPreferencesDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
