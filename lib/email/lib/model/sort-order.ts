/**
 * Email Delivery API
 * Use the Email Delivery API to do the necessary set up to send high-volume and application-generated emails through the OCI Email Delivery service.
For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).

 **Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
 If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
 * Sort orders.
 **/
export enum SortOrder {
  Asc = "ASC",
  Desc = "DESC"
}

export namespace SortOrder {
  export function getJsonObj(obj: SortOrder): SortOrder {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SortOrder): SortOrder {
    return obj;
  }
}
