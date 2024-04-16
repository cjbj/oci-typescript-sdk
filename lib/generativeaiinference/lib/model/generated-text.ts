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
 * The text generated during each run.
 */
export interface GeneratedText {
  /**
   * A unique identifier for this text generation.
   */
  "id": string;
  /**
   * The generated text.
   */
  "text": string;
  /**
    * The overall likelihood of the generated text.
* <p>
When a large language model generates a new token for the output text, a likelihood is assigned to all tokens, where tokens with higher likelihoods are more likely to follow the current token. For example, it's more likely that the word favorite is followed by the word food or book rather than the word zebra. A lower likelihood means that it's less likely that token follows the current token.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "likelihood": number;
  /**
    * The reason why the model stopped generating tokens.
* <p>
A model stops generating tokens if the model hits a natural stop point or reaches a provided stop sequence.
* 
    */
  "finishReason"?: string;
  /**
   * A collection of generated tokens and their corresponding likelihoods.
   */
  "tokenLikelihoods"?: Array<model.TokenLikelihood>;
}

export namespace GeneratedText {
  export function getJsonObj(obj: GeneratedText): object {
    const jsonObj = {
      ...obj,
      ...{
        "tokenLikelihoods": obj.tokenLikelihoods
          ? obj.tokenLikelihoods.map(item => {
              return model.TokenLikelihood.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GeneratedText): object {
    const jsonObj = {
      ...obj,
      ...{
        "tokenLikelihoods": obj.tokenLikelihoods
          ? obj.tokenLikelihoods.map(item => {
              return model.TokenLikelihood.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
