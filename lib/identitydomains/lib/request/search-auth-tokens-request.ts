/**
 *
 *
 * OpenAPI spec version: v1
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/identitydomains/SearchAuthTokens.ts.html |here} to see how to use SearchAuthTokensRequest.
 */
export interface SearchAuthTokensRequest extends common.BaseRequest {
  /**
   * The Authorization field value consists of credentials containing the authentication information of the user agent for the realm of the resource being requested.
   */
  "authorization"?: string;
  /**
   * An endpoint-specific schema version number to use in the Request. Allowed version values are Earliest Version or Latest Version as specified in each REST API endpoint description, or any sequential number inbetween. All schema attributes/body parameters are a part of version 1. After version 1, any attributes added or deprecated will be tagged with the version that they were added to or deprecated in. If no version is provided, the latest schema version is returned.
   */
  "resourceTypeSchemaVersion"?: string;
  /**
   * Parameters for searching AuthTokens
   */
  "authTokenSearchRequest"?: model.AuthTokenSearchRequest;
  /**
   * A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours.
   */
  "opcRetryToken"?: string;
  /**
   * The value of the `opc-next-page` response header from the previous 'List' call.
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated 'List' call.
   */
  "limit"?: number;
}
