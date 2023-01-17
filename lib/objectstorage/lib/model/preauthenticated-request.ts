/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
* Pre-authenticated requests provide a way to let users access a bucket or an object without having their own credentials.
* When you create a pre-authenticated request, a unique URL is generated. Users in your organization, partners, or third
* parties can use this URL to access the targets identified in the pre-authenticated request.
* See [Using Pre-Authenticated Requests](https://docs.cloud.oracle.com/Content/Object/Tasks/usingpreauthenticatedrequests.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an
* administrator. If you are an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface PreauthenticatedRequest {
  /**
   * The unique identifier to use when directly addressing the pre-authenticated request.
   */
  "id": string;
  /**
   * The user-provided name of the pre-authenticated request.
   */
  "name": string;
  /**
   * The URI to embed in the URL when using the pre-authenticated request.
   */
  "accessUri": string;
  /**
   * The name of the object that is being granted access to by the pre-authenticated request. Avoid entering confidential
   * information. The object name can be null and if so, the pre-authenticated request grants access to the entire bucket.
   * Example: test/object1.log
   *
   */
  "objectName"?: string;
  /**
   * Specifies whether a list operation is allowed on a PAR with accessType \"AnyObjectRead\" or \"AnyObjectReadWrite\".
   * Deny: Prevents the user from performing a list operation.
   * ListObjects: Authorizes the user to perform a list operation.
   *
   */
  "bucketListingAction"?: PreauthenticatedRequest.BucketListingAction;
  /**
   * The operation that can be performed on this resource.
   */
  "accessType": PreauthenticatedRequest.AccessType;
  /**
   * The expiration date for the pre-authenticated request as per [RFC 3339](https://tools.ietf.org/html/rfc3339). After
   * this date the pre-authenticated request will no longer be valid.
   *
   */
  "timeExpires": Date;
  /**
   * The date when the pre-authenticated request was created as per specification
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
}

export namespace PreauthenticatedRequest {
  export enum BucketListingAction {
    Deny = "Deny",
    ListObjects = "ListObjects",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AccessType {
    ObjectRead = "ObjectRead",
    ObjectWrite = "ObjectWrite",
    ObjectReadWrite = "ObjectReadWrite",
    AnyObjectWrite = "AnyObjectWrite",
    AnyObjectRead = "AnyObjectRead",
    AnyObjectReadWrite = "AnyObjectReadWrite",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PreauthenticatedRequest): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PreauthenticatedRequest): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
