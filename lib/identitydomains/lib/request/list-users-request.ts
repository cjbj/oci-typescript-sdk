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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/identitydomains/ListUsers.ts.html |here} to see how to use ListUsersRequest.
 */
export interface ListUsersRequest extends common.BaseRequest {
  /**
   * OPTIONAL. The filter string that is used to request a subset of resources. The filter string MUST be a valid filter expression. See the Filtering section of the SCIM specification for more information (Section 3.4.2.2). The string should contain at least one condition that each item must match in order to be returned in the search results. Each condition specifies an attribute, an operator, and a value. Conditions within a filter can be connected by logical operators (such as AND and OR). Sets of conditions can be grouped together using parentheses.
   */
  "filter"?: string;
  /**
   * OPTIONAL. A string that indicates the attribute whose value SHALL be used to order the returned responses. The sortBy attribute MUST be in standard attribute notation form. See the Attribute Notation section of the SCIM specification for more information (Section 3.10). Also, see the Sorting section of the SCIM specification for more information (Section 3.4.2.3).
   */
  "sortBy"?: string;
  /**
   * A string that indicates the order in which the sortBy parameter is applied. Allowed values are 'ascending' and 'descending'. See ([Sorting Section](https://tools.ietf.org/html/draft-ietf-scim-api-19#section-3.4.2.3)). OPTIONAL.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * OPTIONAL. An integer that indicates the 1-based index of the first query result. See the Pagination section of the SCIM specification for more information. (Section 3.4.2.4). The number of results pages to return. The first page is 1. Specify 2 to access the second page of results, and so on.
   */
  "startIndex"?: number;
  /**
   * OPTIONAL. An integer that indicates the desired maximum number of query results per page. 1000 is the largest value that you can use. See the Pagination section of the System for Cross-Domain Identity Management Protocol specification for more information. (Section 3.4.2.4).
   */
  "count"?: number;
  /**
   * A comma-delimited string that specifies the names of resource attributes that should be returned in the response. By default, a response that contains resource attributes contains only attributes that are defined in the schema for that resource type as returned=always or returned=default. An attribute that is defined as returned=request is returned in a response only if the request specifies its name in the value of this query parameter. If a request specifies this query parameter, the response contains the attributes that this query parameter specifies, as well as any attribute that is defined as returned=always.
   */
  "attributes"?: string;
  /**
   * A multi-valued list of strings indicating the return type of attribute definition. The specified set of attributes can be fetched by the return type of the attribute. One or more values can be given together to fetch more than one group of attributes. If 'attributes' query parameter is also available, union of the two is fetched. Valid values - all, always, never, request, default. Values are case-insensitive.
   */
  "attributeSets"?: Array<model.AttributeSets>;
  /**
   * The Authorization field value consists of credentials containing the authentication information of the user agent for the realm of the resource being requested.
   */
  "authorization"?: string;
  /**
   * An endpoint-specific schema version number to use in the Request. Allowed version values are Earliest Version or Latest Version as specified in each REST API endpoint description, or any sequential number inbetween. All schema attributes/body parameters are a part of version 1. After version 1, any attributes added or deprecated will be tagged with the version that they were added to or deprecated in. If no version is provided, the latest schema version is returned.
   */
  "resourceTypeSchemaVersion"?: string;
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
