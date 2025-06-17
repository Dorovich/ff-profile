user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
/*reduce processes number*/
user_pref("dom.ipc.processCount", 2);
user_pref("dom.ipc.processCount.webIsolated", 2);
/*cache to memory, not disk*/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 2097152);
user_pref("browser.cache.disk.parent_directory", "/run/user/1000/firefox");
user_pref("browser.sessionstore.interval", 600000);
user_pref("image.mem.surfacecache.max_size_kb", 500000);
/*disable telemetry and other ads*/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.sessions.current.clean", true);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("browser.urlbar.sponsoredTopSites", false);
user_pref("browser.urlbar.showSponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/*remove ai/ml integration*/
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);
