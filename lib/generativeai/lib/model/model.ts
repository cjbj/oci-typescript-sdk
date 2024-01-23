/**
 * Generative AI Service Management API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service management API to create and manage [dedicated AI clusters](#/en/generative-ai/latest/DedicatedAiCluster/), [endpoints](#/en/generative-ai/latest/Endpoint/), [custom models](#/en/generative-ai/latest/Model/), and [work requests](#/en/generative-ai/latest/WorkRequest/) in the Generative AI service. For example, create a custom model by fine-tuning an out-of-the-box model using your own data, on a fine-tuning dedicated AI cluster. Then, create a hosting dedicated AI cluster with an endpoint to host your custom model. 

To access your custom model endpoints, or to try the out-of-the-box models to generate text, summarize, and create text embeddings see the [Generative AI Inference API](/#/en/generative-ai-inference/latest/).

To learn more about the service, see the [Generative AI documentation](/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
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
* You can create a custom model by using your dataset to fine-tune an out-of-the-box text generation base model. Have your dataset ready before you create a custom model. See [Training Data Requirements](https://docs.cloud.oracle.com/iaas/Content/generative-ai/training-data-requirements.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator who gives OCI resource access to users. See
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/policiesgs/get-started-with-policies.htm) and [Getting Access to Generative AI Resouces](https://docs.cloud.oracle.com/iaas/Content/generative-ai/iam-policies.htm).
* 
*/
export interface Model {
  /**
   * An ID that uniquely identifies a pretrained or fine-tuned model.
   */
  "id": string;
  /**
   * An optional description of the model.
   */
  "description"?: string;
  /**
   * The compartment OCID for fine-tuned models. For pretrained models, this value is null.
   */
  "compartmentId": string;
  /**
   * Describes what this model can be used for.
   */
  "capabilities": Array<Model.Capabilities>;
  /**
   * The lifecycle state of the model.
   */
  "lifecycleState": Model.LifecycleState;
  /**
   * A message describing the current state of the model in more detail that can provide actionable information.
   */
  "lifecycleDetails"?: string;
  /**
   * The provider of the base model.
   */
  "vendor"?: string;
  /**
   * The version of the model.
   */
  "version"?: string;
  /**
   * A user-friendly name.
   */
  "displayName"?: string;
  /**
   * The date and time that the model was created in the format of an RFC3339 datetime string.
   */
  "timeCreated": Date;
  /**
   * The date and time that the model was updated in the format of an RFC3339 datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The OCID of the base model that's used for fine-tuning. For pretrained models, the value is null.
   */
  "baseModelId"?: string;
  /**
   * The model type indicating whether this is a pretrained/base model or a custom/fine-tuned model.
   */
  "type": Model.Type;
  "fineTuneDetails"?: model.FineTuneDetails;
  "modelMetrics"?: model.TextGenerationModelMetrics;
  /**
   * Whether a model is supported long-term. Only applicable to base models.
   */
  "isLongTermSupported"?: boolean;
  /**
   * Corresponds to the time when the custom model and its associated foundation model will be deprecated.
   */
  "timeDeprecated"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Model {
  export enum Capabilities {
    TextGeneration = "TEXT_GENERATION",
    TextSummarization = "TEXT_SUMMARIZATION",
    TextEmbeddings = "TEXT_EMBEDDINGS",
    FineTune = "FINE_TUNE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Base = "BASE",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "fineTuneDetails": obj.fineTuneDetails
          ? model.FineTuneDetails.getJsonObj(obj.fineTuneDetails)
          : undefined,
        "modelMetrics": obj.modelMetrics
          ? model.ModelMetrics.getJsonObj(obj.modelMetrics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Model): object {
    const jsonObj = {
      ...obj,
      ...{
        "fineTuneDetails": obj.fineTuneDetails
          ? model.FineTuneDetails.getDeserializedJsonObj(obj.fineTuneDetails)
          : undefined,
        "modelMetrics": obj.modelMetrics
          ? model.ModelMetrics.getDeserializedJsonObj(obj.modelMetrics)
          : undefined
      }
    };

    return jsonObj;
  }
}
