/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage your [Oracle Cloud VMware Solution](/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20200501
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
 * A list of work request logs.
 */
export interface WorkRequestLogEntryCollection {
  /**
   * A list of work request logs.
   */
  "items": Array<model.WorkRequestLogEntry>;
}

export namespace WorkRequestLogEntryCollection {
  export function getJsonObj(obj: WorkRequestLogEntryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestLogEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
