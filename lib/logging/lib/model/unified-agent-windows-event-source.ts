/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, and agent configurations.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * Windows events log source object.
 */
export interface UnifiedAgentWindowsEventSource extends model.UnifiedAgentLoggingSource {
  /**
   * Windows event log channels.
   */
  "channels": Array<string>;

  "sourceType": string;
}

export namespace UnifiedAgentWindowsEventSource {
  export function getJsonObj(
    obj: UnifiedAgentWindowsEventSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentLoggingSource.getJsonObj(obj) as UnifiedAgentWindowsEventSource)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "WINDOWS_EVENT_LOG";
  export function getDeserializedJsonObj(
    obj: UnifiedAgentWindowsEventSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentLoggingSource.getDeserializedJsonObj(
            obj
          ) as UnifiedAgentWindowsEventSource)),
      ...{}
    };

    return jsonObj;
  }
}
