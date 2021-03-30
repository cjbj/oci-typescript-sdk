/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The collection of event types and corresponding versions mapped to the source.
 */
export interface EventTypeDetails {
  /**
   * An array of event type specifications.
   */
  "items"?: Array<model.EventType>;
}

export namespace EventTypeDetails {
  export function getJsonObj(obj: EventTypeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.EventType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
