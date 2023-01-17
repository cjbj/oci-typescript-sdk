/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Configuration Summary of a Private Endpoint Co-managed External database.
 */
export interface PeComanagedManagedExternalDatabaseConfigurationSummary
  extends model.DatabaseConfigurationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "parentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the OPSI private endpoint
   */
  "opsiPrivateEndpointId": string;
  /**
   * Array of hostname and instance name.
   */
  "instances": Array<model.HostInstanceMap>;
  "exadataDetails": model.ExadataDetails;

  "entitySource": string;
}

export namespace PeComanagedManagedExternalDatabaseConfigurationSummary {
  export function getJsonObj(
    obj: PeComanagedManagedExternalDatabaseConfigurationSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationSummary.getJsonObj(
            obj
          ) as PeComanagedManagedExternalDatabaseConfigurationSummary)),
      ...{
        "instances": obj.instances
          ? obj.instances.map(item => {
              return model.HostInstanceMap.getJsonObj(item);
            })
          : undefined,
        "exadataDetails": obj.exadataDetails
          ? model.ExadataDetails.getJsonObj(obj.exadataDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export const entitySource = "PE_COMANAGED_DATABASE";
  export function getDeserializedJsonObj(
    obj: PeComanagedManagedExternalDatabaseConfigurationSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConfigurationSummary.getDeserializedJsonObj(
            obj
          ) as PeComanagedManagedExternalDatabaseConfigurationSummary)),
      ...{
        "instances": obj.instances
          ? obj.instances.map(item => {
              return model.HostInstanceMap.getDeserializedJsonObj(item);
            })
          : undefined,
        "exadataDetails": obj.exadataDetails
          ? model.ExadataDetails.getDeserializedJsonObj(obj.exadataDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
