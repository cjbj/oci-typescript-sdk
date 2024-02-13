/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm).

**Note**: Before you can create service requests with this API, 
you need to have an Oracle Single Sign On (SSO) account, 
and you need to register your Customer Support Identifier (CSI) with My Oracle Support.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Details about the item object.
 */
export interface Item {
  /**
   * Unique identifier for the item.
   */
  "itemKey": string;
  /**
   * The display name of the item. Avoid entering confidential information.
   */
  "name"?: string;
  "category"?: model.Category;
  "subCategory"?: model.SubCategory;
  "issueType"?: model.IssueType;

  "type": string;
}

export namespace Item {
  export function getJsonObj(obj: Item): object {
    const jsonObj = {
      ...obj,
      ...{
        "category": obj.category ? model.Category.getJsonObj(obj.category) : undefined,
        "subCategory": obj.subCategory ? model.SubCategory.getJsonObj(obj.subCategory) : undefined,
        "issueType": obj.issueType ? model.IssueType.getJsonObj(obj.issueType) : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "account":
          return model.AccountItem.getJsonObj(<model.AccountItem>(<object>jsonObj), true);
        case "limit":
          return model.LimitItem.getJsonObj(<model.LimitItem>(<object>jsonObj), true);
        case "tech":
          return model.TechSupportItem.getJsonObj(<model.TechSupportItem>(<object>jsonObj), true);
        case "activity":
          return model.ActivityItem.getJsonObj(<model.ActivityItem>(<object>jsonObj), true);
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Item): object {
    const jsonObj = {
      ...obj,
      ...{
        "category": obj.category ? model.Category.getDeserializedJsonObj(obj.category) : undefined,
        "subCategory": obj.subCategory
          ? model.SubCategory.getDeserializedJsonObj(obj.subCategory)
          : undefined,
        "issueType": obj.issueType
          ? model.IssueType.getDeserializedJsonObj(obj.issueType)
          : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "account":
          return model.AccountItem.getDeserializedJsonObj(
            <model.AccountItem>(<object>jsonObj),
            true
          );
        case "limit":
          return model.LimitItem.getDeserializedJsonObj(<model.LimitItem>(<object>jsonObj), true);
        case "tech":
          return model.TechSupportItem.getDeserializedJsonObj(
            <model.TechSupportItem>(<object>jsonObj),
            true
          );
        case "activity":
          return model.ActivityItem.getDeserializedJsonObj(
            <model.ActivityItem>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
