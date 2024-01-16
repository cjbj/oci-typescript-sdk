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
 * The metadata associated with the recommendation summary.
 *
 */
export interface RecommendationSummary {
  /**
   * The unique OCID associated with the recommendation.
   */
  "id": string;
  /**
   * The OCID of the tenancy. The tenancy is the root compartment.
   */
  "compartmentId": string;
  /**
   * The unique OCID associated with the category.
   */
  "categoryId": string;
  /**
   * The name assigned to the recommendation.
   */
  "name": string;
  /**
   * Text describing the recommendation.
   */
  "description": string;
  /**
   * The level of importance assigned to the recommendation.
   */
  "importance": model.Importance;
  /**
   * An array of {@code ResourceCount} objects grouped by the status of the resource actions.
   */
  "resourceCounts": Array<model.ResourceCount>;
  /**
   * The recommendation's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The estimated cost savings, in dollars, for the recommendation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedCostSaving": number;
  /**
   * The current status of the recommendation.
   */
  "status": model.Status;
  /**
    * The date and time that the recommendation entered its current status. The format is defined by RFC3339.
* <p>
For example, \"The status of the recommendation changed from {@code pending} to {@code current(ignored)} on this date and time.\"
* 
    */
  "timeStatusBegin": Date;
  /**
    * The date and time the current status will change. The format is defined by RFC3339.
* <p>
For example, \"The current {@code postponed} status of the recommendation will end and change to {@code pending} on this
* date and time.\"
* 
    */
  "timeStatusEnd"?: Date;
  /**
   * The date and time the recommendation details were created, in the format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the recommendation details were last updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  "supportedLevels"?: model.SupportedLevels;
  /**
    * Additional metadata key/value pairs for the recommendation summary.
* <p>
For example:
* <p>
{@code {\"EstimatedSaving\": \"200\"}}
* 
    */
  "extendedMetadata"?: { [key: string]: string };
}

export namespace RecommendationSummary {
  export function getJsonObj(obj: RecommendationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceCounts": obj.resourceCounts
          ? obj.resourceCounts.map(item => {
              return model.ResourceCount.getJsonObj(item);
            })
          : undefined,

        "supportedLevels": obj.supportedLevels
          ? model.SupportedLevels.getJsonObj(obj.supportedLevels)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecommendationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceCounts": obj.resourceCounts
          ? obj.resourceCounts.map(item => {
              return model.ResourceCount.getDeserializedJsonObj(item);
            })
          : undefined,

        "supportedLevels": obj.supportedLevels
          ? model.SupportedLevels.getDeserializedJsonObj(obj.supportedLevels)
          : undefined
      }
    };

    return jsonObj;
  }
}
