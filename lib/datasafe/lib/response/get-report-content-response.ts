/**
 *
 *
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");
import stream = require("stream");

export interface GetReportContentResponse {
  /**
   * For optimistic concurrency control. For more information, see [ETags for Optimistic Concurrency Control](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#eleven)
   *
   */
  "etag": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * Size of the file.
   */
  "contentLength": number;
  /**
   * The date and time the report was last modified, in the format defined by HTTP-date.
   */
  "lastModified": Date;
  /**
   * The returned stream.Readable | ReadableStream instance.
   */
  "value": stream.Readable | ReadableStream;
}
