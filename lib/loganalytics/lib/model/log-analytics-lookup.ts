/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LogAnalyticsLookup
 */
export interface LogAnalyticsLookup {
  /**
   * The active edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "activeEditVersion"?: number;
  /**
   * The canonical link.
   */
  "canonicalLink"?: string;
  /**
   * The lookup description.
   */
  "description"?: string;
  /**
   * The edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "editVersion"?: number;
  /**
   * The lookup fields.
   */
  "fields"?: Array<model.LookupField>;
  /**
   * The lookup reference as an integer. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lookupReference"?: number;
  /**
   * The lookup reference as a string.
   */
  "lookupReferenceString"?: string;
  /**
   * The lookup type. Valid values are Lookup, Dictionary or Module.
   */
  "type"?: LogAnalyticsLookup.Type;
  /**
   * The lookup name.
   */
  "name"?: string;
  /**
   * A flag indicating if the lookup is custom (user-defined) or
   * built in.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "isBuiltIn"?: number;
  /**
   * A flag indicating if the lookup is hidden or not.  A hidden lookup will
   * not be returned in list operations by default.
   *
   */
  "isHidden"?: boolean;
  /**
   * The lookup display name.
   */
  "lookupDisplayName"?: string;
  "referringSources"?: model.AutoLookups;
  "statusSummary"?: model.StatusSummary;
  /**
   * The last updated date.
   */
  "timeUpdated"?: Date;
  /**
   * An array of categories assigned to this lookup.
   * The isSystem flag denotes if each category assignment is user-created or Oracle-defined.
   *
   */
  "categories"?: Array<model.LogAnalyticsCategory>;
}

export namespace LogAnalyticsLookup {
  export enum Type {
    Lookup = "Lookup",
    Dictionary = "Dictionary",
    Module = "Module",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsLookup): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LookupField.getJsonObj(item);
            })
          : undefined,

        "referringSources": obj.referringSources
          ? model.AutoLookups.getJsonObj(obj.referringSources)
          : undefined,
        "statusSummary": obj.statusSummary
          ? model.StatusSummary.getJsonObj(obj.statusSummary)
          : undefined,

        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsLookup): object {
    const jsonObj = {
      ...obj,
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.LookupField.getDeserializedJsonObj(item);
            })
          : undefined,

        "referringSources": obj.referringSources
          ? model.AutoLookups.getDeserializedJsonObj(obj.referringSources)
          : undefined,
        "statusSummary": obj.statusSummary
          ? model.StatusSummary.getDeserializedJsonObj(obj.statusSummary)
          : undefined,

        "categories": obj.categories
          ? obj.categories.map(item => {
              return model.LogAnalyticsCategory.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
