/**
 * Generative AI Service Inference API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service inference API to access your custom model endpoints, or to try the out-of-the-box models to [generate text](#/en/generative-ai-inference/latest/GenerateTextResult/GenerateText), [summarize](#/en/generative-ai-inference/latest/SummarizeTextResult/SummarizeText), and [create text embeddings](#/en/generative-ai-inference/latest/EmbedTextResult/EmbedText).

To use a Generative AI custom model for inference, you must first create an endpoint for that model. Use the [Generative AI service management API](/#/en/generative-ai/latest/) to [create a custom model](#/en/generative-ai/latest/Model/) by fine-tuning an out-of-the-box model, or a previous version of a custom model, using your own data. Fine-tune the custom model on a  [fine-tuning dedicated AI cluster](#/en/generative-ai/latest/DedicatedAiCluster/). Then, create a [hosting dedicated AI cluster](#/en/generative-ai/latest/DedicatedAiCluster/) with an [endpoint](#/en/generative-ai/latest/Endpoint/) to host your custom model. For resource management in the Generative AI service, use the [Generative AI service management API](/#/en/generative-ai/latest/).

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
 * The base class for inference responses.
 */
export interface LlmInferenceResponse {
  "runtimeType": string;
}

export namespace LlmInferenceResponse {
  export function getJsonObj(obj: LlmInferenceResponse): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "runtimeType" in obj && obj.runtimeType) {
      switch (obj.runtimeType) {
        case "LLAMA":
          return model.LlamaLlmInferenceResponse.getJsonObj(
            <model.LlamaLlmInferenceResponse>(<object>jsonObj),
            true
          );
        case "COHERE":
          return model.CohereLlmInferenceResponse.getJsonObj(
            <model.CohereLlmInferenceResponse>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.runtimeType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LlmInferenceResponse): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "runtimeType" in obj && obj.runtimeType) {
      switch (obj.runtimeType) {
        case "LLAMA":
          return model.LlamaLlmInferenceResponse.getDeserializedJsonObj(
            <model.LlamaLlmInferenceResponse>(<object>jsonObj),
            true
          );
        case "COHERE":
          return model.CohereLlmInferenceResponse.getDeserializedJsonObj(
            <model.CohereLlmInferenceResponse>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.runtimeType}`);
      }
    }
    return jsonObj;
  }
}
