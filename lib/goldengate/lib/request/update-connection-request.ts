/**
 *
 *
 * OpenAPI spec version: 20200407
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/goldengate/UpdateConnection.ts.html |here} to see how to use UpdateConnectionRequest.
 */
export interface UpdateConnectionRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a Connection.
   *
   */
  "connectionId": string;
  /**
   * The new Connection specifications to apply.
   *
   */
  "updateConnectionDetails":
    | model.UpdateElasticsearchConnectionDetails
    | model.UpdateGoogleBigQueryConnectionDetails
    | model.UpdateOracleConnectionDetails
    | model.UpdateAmazonRedshiftConnectionDetails
    | model.UpdateOciObjectStorageConnectionDetails
    | model.UpdateRedisConnectionDetails
    | model.UpdateMongoDbConnectionDetails
    | model.UpdateGoogleCloudStorageConnectionDetails
    | model.UpdateAzureDataLakeStorageConnectionDetails
    | model.UpdateAmazonKinesisConnectionDetails
    | model.UpdateJavaMessageServiceConnectionDetails
    | model.UpdateGoldenGateConnectionDetails
    | model.UpdatePostgresqlConnectionDetails
    | model.UpdateMicrosoftSqlserverConnectionDetails
    | model.UpdateOracleNosqlConnectionDetails
    | model.UpdateKafkaSchemaRegistryConnectionDetails
    | model.UpdateAmazonS3ConnectionDetails
    | model.UpdateSnowflakeConnectionDetails
    | model.UpdateHdfsConnectionDetails
    | model.UpdateMysqlConnectionDetails
    | model.UpdateKafkaConnectionDetails
    | model.UpdateGenericConnectionDetails
    | model.UpdateAzureSynapseConnectionDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the
   * `if-match` parameter to the value of the etag from a previous GET or POST response for that
   * resource.  The resource is updated or deleted only if the etag you provide matches the
   * resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * The client request ID for tracing.
   *
   */
  "opcRequestId"?: string;
}
