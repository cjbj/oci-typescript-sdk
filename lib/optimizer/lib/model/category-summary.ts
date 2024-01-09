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
 * The metadata associated with the category summary.
 *
 */
export interface CategorySummary {
  /**
   * The unique OCID of the category.
   */
  "id": string;
  /**
   * The OCID of the tenancy. The tenancy is the root compartment.
   */
  "compartmentId": string;
  /**
   * The name associated with the compartment.
   */
  "compartmentName": string;
  /**
   * The name assigned to the category.
   */
  "name": string;
  /**
   * Text describing the category.
   */
  "description": string;
  /**
   * An array of `RecommendationCount` objects grouped by the level of importance assigned to each recommendation.
   */
  "recommendationCounts": Array<model.RecommendationCount>;
  /**
   * An array of `ResourceCount` objects grouped by the status of each recommendation.
   */
  "resourceCounts": Array<model.ResourceCount>;
  /**
   * The category's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The estimated cost savings, in dollars, for the category. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedCostSaving": number;
  /**
   * The date and time the category details were created, in the format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The date and time the category details were last updated, in the format defined by RFC3339.
   */
  "timeUpdated": Date;
  /**
    * Additional metadata key/value pairs for the category summary.
* <p>
For example:
* <p>
`{\"EstimatedSaving\": \"200\"}`
* 
    */
  "extendedMetadata"?: { [key: string]: string };
}

export namespace CategorySummary {
  export function getJsonObj(obj: CategorySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "recommendationCounts": obj.recommendationCounts
          ? obj.recommendationCounts.map(item => {
              return model.RecommendationCount.getJsonObj(item);
            })
          : undefined,
        "resourceCounts": obj.resourceCounts
          ? obj.resourceCounts.map(item => {
              return model.ResourceCount.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CategorySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "recommendationCounts": obj.recommendationCounts
          ? obj.recommendationCounts.map(item => {
              return model.RecommendationCount.getDeserializedJsonObj(item);
            })
          : undefined,
        "resourceCounts": obj.resourceCounts
          ? obj.resourceCounts.map(item => {
              return model.ResourceCount.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
