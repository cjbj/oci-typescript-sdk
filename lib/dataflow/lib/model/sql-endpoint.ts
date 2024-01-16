/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The description of a SQL Endpoint.
 */
export interface SqlEndpoint {
  /**
   * The provision identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The SQL Endpoint name, which can be changed.
   */
  "displayName": string;
  /**
   * The OCID of a compartment.
   *
   */
  "compartmentId": string;
  /**
   * The JDBC URL field. For example, jdbc:spark://{serviceFQDN}:443/default;SparkServerType=DFI
   */
  "jdbcEndpointUrl"?: string;
  /**
   * The time the Sql Endpoint was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the Sql Endpoint was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the Sql Endpoint.
   */
  "lifecycleState"?: model.SqlEndpointLifecycleState;
  /**
   * A message describing the reason why the resource is in it's current state. Helps bubble up errors in state changes. For example, it can be used to provide actionable information for a resource in the Failed state.
   */
  "stateMessage"?: string;
  /**
   * The version of SQL Endpoint.
   */
  "sqlEndpointVersion": string;
  /**
   * The shape of the SQL Endpoint driver instance.
   */
  "driverShape": string;
  "driverShapeConfig"?: model.ShapeConfig;
  /**
   * The shape of the SQL Endpoint executor instance.
   */
  "executorShape": string;
  "executorShapeConfig"?: model.ShapeConfig;
  /**
   * The minimum number of executors. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minExecutorCount": number;
  /**
   * The maximum number of executors. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxExecutorCount": number;
  /**
   * The OCID of OCI Hive Metastore.
   *
   */
  "metastoreId": string;
  /**
   * The OCID of OCI Lake.
   */
  "lakeId": string;
  /**
   * The warehouse bucket URI. It is a Oracle Cloud Infrastructure Object Storage bucket URI as defined here https://docs.oracle.com/en/cloud/paas/atp-cloud/atpud/object-storage-uris.html
   */
  "warehouseBucketUri": string;
  /**
   * The description of the SQL Endpoint.
   */
  "description": string;
  /**
   * This token is used by Splat, and indicates that the service accepts the request, and that the request is currently being processed.
   */
  "lastAcceptedRequestToken"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {orcl-cloud: {free-tier-retain: true}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The Spark configuration passed to the running process.
   * See https://spark.apache.org/docs/latest/configuration.html#available-properties.
   * Example: { \"spark.app.name\" : \"My App Name\", \"spark.shuffle.io.maxRetries\" : \"4\" }
   * Note: Not all Spark properties are permitted to be set.  Attempting to set a property that is
   * not allowed to be overwritten will cause a 400 status to be returned.
   *
   */
  "sparkAdvancedConfigurations"?: { [key: string]: string };
  "networkConfiguration"?: model.SqlEndpointVcnConfig | model.SqlEndpointSecureAccessConfig;
}

export namespace SqlEndpoint {
  export function getJsonObj(obj: SqlEndpoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "driverShapeConfig": obj.driverShapeConfig
          ? model.ShapeConfig.getJsonObj(obj.driverShapeConfig)
          : undefined,

        "executorShapeConfig": obj.executorShapeConfig
          ? model.ShapeConfig.getJsonObj(obj.executorShapeConfig)
          : undefined,

        "networkConfiguration": obj.networkConfiguration
          ? model.SqlEndpointNetworkConfiguration.getJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlEndpoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "driverShapeConfig": obj.driverShapeConfig
          ? model.ShapeConfig.getDeserializedJsonObj(obj.driverShapeConfig)
          : undefined,

        "executorShapeConfig": obj.executorShapeConfig
          ? model.ShapeConfig.getDeserializedJsonObj(obj.executorShapeConfig)
          : undefined,

        "networkConfiguration": obj.networkConfiguration
          ? model.SqlEndpointNetworkConfiguration.getDeserializedJsonObj(obj.networkConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
