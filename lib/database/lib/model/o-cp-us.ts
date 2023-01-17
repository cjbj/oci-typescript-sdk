/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The details of the available and consumed CPU cores of the Autonomous Exadata Infrastructure instance, including consumption by database workload type.
 *
 */
export interface OCPUs {
  /**
   * The total number of OCPUs in the Autonomous Exadata Infrastructure instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCpu"?: number;
  /**
   * The total number of consumed OCPUs in the Autonomous Exadata Infrastructure instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "consumedCpu"?: number;
  "byWorkloadType"?: model.WorkloadType;
}

export namespace OCPUs {
  export function getJsonObj(obj: OCPUs): object {
    const jsonObj = {
      ...obj,
      ...{
        "byWorkloadType": obj.byWorkloadType
          ? model.WorkloadType.getJsonObj(obj.byWorkloadType)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OCPUs): object {
    const jsonObj = {
      ...obj,
      ...{
        "byWorkloadType": obj.byWorkloadType
          ? model.WorkloadType.getDeserializedJsonObj(obj.byWorkloadType)
          : undefined
      }
    };

    return jsonObj;
  }
}
