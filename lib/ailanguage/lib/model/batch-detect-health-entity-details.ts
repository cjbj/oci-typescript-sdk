/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * The documents details for health entities detect call.
 */
export interface BatchDetectHealthEntityDetails {
  /**
   * The endpoint which have to be used for inferencing.
   */
  "endpointId": string;
  /**
   * List of Documents for detect health entities.
   */
  "documents": Array<model.TextDocument>;
  /**
   * List of NLP health ontologies to be linked
   */
  "linkOntologies"?: Array<string>;
  /**
   * is assertion on input text required. default value true.
   */
  "isDetectAssertions"?: boolean;
  /**
   * is relationship on input text required. default value true.
   */
  "isDetectRelationships"?: boolean;
  "profile"?: model.Profile;
}

export namespace BatchDetectHealthEntityDetails {
  export function getJsonObj(obj: BatchDetectHealthEntityDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "documents": obj.documents
          ? obj.documents.map(item => {
              return model.TextDocument.getJsonObj(item);
            })
          : undefined,

        "profile": obj.profile ? model.Profile.getJsonObj(obj.profile) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BatchDetectHealthEntityDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "documents": obj.documents
          ? obj.documents.map(item => {
              return model.TextDocument.getDeserializedJsonObj(item);
            })
          : undefined,

        "profile": obj.profile ? model.Profile.getDeserializedJsonObj(obj.profile) : undefined
      }
    };

    return jsonObj;
  }
}
