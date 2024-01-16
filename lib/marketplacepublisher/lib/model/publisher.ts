/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
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
 * The model for a publisher details.
 */
export interface Publisher {
  /**
   * publisher status.
   */
  "publisherStatus": Publisher.PublisherStatus;
  /**
   * The private email address of the publisher product team.
   */
  "notificationEmail"?: string;
  "opnMembership"?: model.OpnMembership;
  "privateOfferAccountDetails"?: model.PrivateOfferAccountDetails;
  /**
   * Unique OCID identifier for the publisher.
   */
  "id": string;
  /**
   * The root compartment of the Publisher.
   */
  "compartmentId": string;
  /**
   * The namespace for the publisher registry to persist artifacts.
   */
  "registryNamespace": string;
  /**
   * Unique legacy service identifier for the publisher.
   */
  "legacyId"?: string;
  /**
   * The name of the publisher.
   */
  "displayName": string;
  /**
   * A description of the publisher.
   */
  "description"?: string;
  /**
   * The year the publisher's company or organization was founded. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "yearFounded"?: number;
  /**
   * The publisher's website.
   */
  "websiteUrl"?: string;
  /**
   * The public email address of the publisher for customers.
   */
  "contactEmail": string;
  /**
   * The phone number of the publisher in E.164 format.
   */
  "contactPhone": string;
  /**
   * The address of the publisher's headquarters.
   */
  "hqAddress"?: string;
  "logo"?: model.UploadData;
  /**
   * Publisher's Facebook URL
   */
  "facebookUrl"?: string;
  /**
   * Publisher's Twitter URL
   */
  "twitterUrl"?: string;
  /**
   * Publisher's LinkedIn URL
   */
  "linkedinUrl"?: string;
  /**
   * publisher type.
   */
  "publisherType": Publisher.PublisherType;
  /**
   * The time the publisher was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the publisher was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Publisher {
  export enum PublisherStatus {
    New = "NEW",
    Approved = "APPROVED",
    Suspended = "SUSPENDED",
    Removed = "REMOVED",
    Rejected = "REJECTED",
    Contacted = "CONTACTED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PublisherType {
    Internal = "INTERNAL",
    External = "EXTERNAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Publisher): object {
    const jsonObj = {
      ...obj,
      ...{
        "opnMembership": obj.opnMembership
          ? model.OpnMembership.getJsonObj(obj.opnMembership)
          : undefined,
        "privateOfferAccountDetails": obj.privateOfferAccountDetails
          ? model.PrivateOfferAccountDetails.getJsonObj(obj.privateOfferAccountDetails)
          : undefined,

        "logo": obj.logo ? model.UploadData.getJsonObj(obj.logo) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Publisher): object {
    const jsonObj = {
      ...obj,
      ...{
        "opnMembership": obj.opnMembership
          ? model.OpnMembership.getDeserializedJsonObj(obj.opnMembership)
          : undefined,
        "privateOfferAccountDetails": obj.privateOfferAccountDetails
          ? model.PrivateOfferAccountDetails.getDeserializedJsonObj(obj.privateOfferAccountDetails)
          : undefined,

        "logo": obj.logo ? model.UploadData.getDeserializedJsonObj(obj.logo) : undefined
      }
    };

    return jsonObj;
  }
}
