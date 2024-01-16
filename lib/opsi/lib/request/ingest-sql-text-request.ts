/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/IngestSqlText.ts.html |here} to see how to use IngestSqlTextRequest.
 */
export interface IngestSqlTextRequest extends common.BaseRequest {
  /**
   * Collection of SQL text objects for a particular database.
   */
  "ingestSqlTextDetails": model.IngestSqlTextDetails;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * Optional [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the associated DBaaS entity.
   *
   */
  "databaseId"?: string;
  /**
   * [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database insight resource.
   *
   */
  "id"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Used for optimistic concurrency control. In the update or delete call for a resource, set the {@code if-match}
   * parameter to the value of the etag from a previous get, create, or update response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * A token that uniquely identifies a request that can be retried in case of a timeout or
   * server error without risk of executing the same action again. Retry tokens expire after 24
   * hours.
   * <p>
   *Note:* Retry tokens can be invalidated before the 24 hour time limit due to conflicting
   * operations, such as a resource being deleted or purged from the system.
   *
   */
  "opcRetryToken"?: string;
}
