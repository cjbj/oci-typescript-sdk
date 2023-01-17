/**
 *
 *
 * OpenAPI spec version: 20190101
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

export interface HeadModelArtifactResponse {
  /**
   * For optimistic concurrency control. See [ETags for Optimistic Concurrency Control](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#eleven).
   *
   */
  "etag": string;
  /**
   * Unique Oracle assigned identifier for the request. If you need to contact
   * Oracle about a particular request, then provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The content size of the body in bytes.
   */
  "contentLength": number;
  /**
   * The content disposition of the body, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 19.5.1.
   */
  "contentDisposition": string;
  /**
   * The base-64 encoded MD5 hash of the body, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 14.15.
   * Unavailable for objects uploaded using multipart upload.
   * If the `content-md5` header is present, Object Storage performs an integrity check on the body of the HTTP request by computing the MD5 hash for the body and comparing it to the MD5 hash supplied in the header.
   * If the two hashes do not match, the object is rejected and an HTTP-400 Unmatched Content MD5 error is returned with the message:
   * \"The computed MD5 of the request body (ACTUAL_MD5) does not match the Content-MD5 header (HEADER_MD5)\"
   *
   */
  "contentMd5": string;
  /**
   * The artifact modification time, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 14.29.
   */
  "lastModified": Date;
}
