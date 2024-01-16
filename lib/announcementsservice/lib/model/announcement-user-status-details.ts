/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * An announcement's status regarding whether it has been acknowledged by a user.
 *
 */
export interface AnnouncementUserStatusDetails {
  /**
   * The OCID of the announcement that this status is associated with.
   */
  "userStatusAnnouncementId": string;
  /**
   * The OCID of the user that this status is associated with.
   */
  "userId": string;
  /**
   * The date and time the announcement was acknowledged, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: {@code 2019-01-01T17:43:01.389+0000}
   *
   */
  "timeAcknowledged"?: Date;
}

export namespace AnnouncementUserStatusDetails {
  export function getJsonObj(obj: AnnouncementUserStatusDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnnouncementUserStatusDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
