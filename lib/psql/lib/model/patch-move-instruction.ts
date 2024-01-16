/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * An operation that \"puts\" values from elsewhere in the target, functionally equivalent to a single add and then a remove.
 * The first item of the selection is replaced, or created if the selection is empty.
 * NOT_FOUND exceptions in the selection are handled by creating the implied containing structure.
 * This operation fails if the {@code from} selection yields any exceptions, or if an item is moved to any of its descendants.
 *
 */
export interface PatchMoveInstruction extends model.PatchInstruction {
  /**
   * The selection that is to be moved, with the same format and semantics as {@code selection}.
   */
  "from": string;
  /**
   * Where to insert the value in an array, relative to the first item in the selection.
   * If there is no such item, then \"BEFORE\" specifies insertion at the first position in an array and \"AFTER\" specifies insertion at the last position.
   * If the first item in the selection is not the child of an array, then this field has no effect.
   *
   */
  "position"?: PatchMoveInstruction.Position;

  "operation": string;
}

export namespace PatchMoveInstruction {
  export enum Position {
    At = "AT",
    Before = "BEFORE",
    After = "AFTER"
  }

  export function getJsonObj(obj: PatchMoveInstruction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.PatchInstruction.getJsonObj(obj) as PatchMoveInstruction)),
      ...{}
    };

    return jsonObj;
  }
  export const operation = "MOVE";
  export function getDeserializedJsonObj(
    obj: PatchMoveInstruction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchInstruction.getDeserializedJsonObj(obj) as PatchMoveInstruction)),
      ...{}
    };

    return jsonObj;
  }
}
