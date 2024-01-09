/**
 *
 *
 * OpenAPI spec version: 20190506
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/ListTranslators.ts.html |here} to see how to use ListTranslatorsRequest.
 */
export interface ListTranslatorsRequest extends common.BaseRequest {
  /**
   * Unique Digital Assistant instance identifier.
   */
  "odaInstanceId": string;
  /**
   * Unique Translator identifier.
   */
  "id"?: string;
  /**
   * List only Translators of this type.
   */
  "type"?: model.TranslationService;
  /**
 * List only Translators with this name. Translator names are unique and may not change.
* <p>
Example: `MyTranslator`
* 
 */
  "name"?: string;
  /**
   * List only the resources that are in this lifecycle state.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
 * The page at which to start retrieving results.
* <p>
You get this value from the `opc-next-page` header in a previous list request.
* To retireve the first page, omit this query parameter.
* <p>
Example: `MToxMA==`
* 
 */
  "page"?: string;
  /**
   * Sort the results in this order, use either `ASC` (ascending) or `DESC` (descending).
   */
  "sortOrder"?: ListTranslatorsRequest.SortOrder;
  /**
 * Sort on this field. You can specify one sort order only. The default sort field is `timeCreated`.
* <p>
The default sort order for `timeCreated` and `timeUpdated` is descending.
* For all other sort fields the default sort order is ascending.
* 
 */
  "sortBy"?: ListTranslatorsRequest.SortBy;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
}

export namespace ListTranslatorsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    Name = "name",
    Type = "type"
  }
}
