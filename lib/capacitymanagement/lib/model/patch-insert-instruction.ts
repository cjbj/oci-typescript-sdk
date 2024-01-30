/**
 * OciControlCenterCp API
 * A description of the OciControlCenterCp API
 * OpenAPI spec version: 20231107
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
 * An operation that inserts a value into an array, shifting array items as necessary and handling NOT_FOUND exceptions by creating the implied containing structure.
 *
 */
export interface PatchInsertInstruction extends model.PatchInstruction {
  /**
   * A value to be inserted into the target.
   */
  "value": any;
  /**
   * A selection to be evaluated against the array for identifying a particular reference item within it, with the same format and semantics as {@code selection}.
   */
  "selectedItem"?: string;
  /**
   * Where to insert the value, relative to the first item matched by {@code selectedItem}.
   * If {@code selectedItem} is unspecified, then \"BEFORE\" specifies insertion at the first position in an array and \"AFTER\" specifies insertion at the last position.
   * If {@code selectedItem} is specified but results in an empty selection, then both values specify insertion at the last position.
   *
   */
  "position"?: PatchInsertInstruction.Position;

  "operation": string;
}

export namespace PatchInsertInstruction {
  export enum Position {
    Before = "BEFORE",
    After = "AFTER"
  }

  export function getJsonObj(obj: PatchInsertInstruction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getJsonObj(obj) as PatchInsertInstruction)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "INSERT";
  export function getDeserializedJsonObj(
    obj: PatchInsertInstruction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getDeserializedJsonObj(obj) as PatchInsertInstruction)),
      ...{}
    };

    return jsonObj;
  }
}
