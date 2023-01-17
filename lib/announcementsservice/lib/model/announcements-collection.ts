/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A list of announcements that match filter criteria, if any. Results contain both the announcements and the user-specific status of the announcements.
 *
 */
export interface AnnouncementsCollection {
  /**
   * A collection of announcements.
   */
  "items"?: Array<model.AnnouncementSummary>;
  /**
   * The user-specific status for found announcements.
   */
  "userStatuses"?: Array<model.AnnouncementUserStatusDetails>;
}

export namespace AnnouncementsCollection {
  export function getJsonObj(obj: AnnouncementsCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AnnouncementSummary.getJsonObj(item);
            })
          : undefined,
        "userStatuses": obj.userStatuses
          ? obj.userStatuses.map(item => {
              return model.AnnouncementUserStatusDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnnouncementsCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AnnouncementSummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "userStatuses": obj.userStatuses
          ? obj.userStatuses.map(item => {
              return model.AnnouncementUserStatusDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
