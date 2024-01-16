/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
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
 * A tag key definition used in the current profile override, including the tag namespace, tag key, tag value type, and tag values.
 * Only defined tags are supported.
 * For more information about tagging, see [Tagging Overview](https://docs.cloud.oracle.com/iaas/Content/Tagging/Concepts/taggingoverview.htm)
 *
 */
export interface TargetTag {
  /**
   * The name of the tag namespace.
   */
  "tagNamespaceName": string;
  /**
   * The name you use to refer to the tag, also known as the tag key.
   */
  "tagDefinitionName": string;
  /**
    * Specifies which tag value types in the {@code tagValues} field result in overrides of the recommendation criteria.
* <p>
When the value for this field is {@code ANY}, the {@code tagValues} field should be empty, which enforces overrides to the recommendation
* for resources with any tag values attached to them.
* <p>
When the value for this field value is {@code VALUE}, the {@code tagValues} field must include a specific value or list of values.
* Overrides to the recommendation criteria only occur for resources that match the values in the {@code tagValues} fields.
* 
    */
  "tagValueType": model.TagValueType;
  /**
   * The list of tag values. The tag value is the value that the user applying the tag adds to the tag key.
   */
  "tagValues"?: Array<string>;
}

export namespace TargetTag {
  export function getJsonObj(obj: TargetTag): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetTag): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
