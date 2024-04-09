/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as identity from "oci-identity";

(async () => {
  const identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });

  try {
    const provider: common.SessionAuthDetailProvider = new common.SessionAuthDetailProvider(
      undefined,
      "profile_name_here"
    );
    const compartmentId = provider.getTenantId();
    const listUserReq = { compartmentId: compartmentId };
    let users = await identityClient.listUsers(listUserReq);

    // Refresh
    await provider.refreshSessionToken(); // Refresh the token.
    users = await identityClient.listUsers(listUserReq); // API should still work.
    return users;
  } catch (e) {
    console.log("error: ", e);
  }

  identityClient.close();
})();
