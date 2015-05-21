
/*
 * Warning.
 * Do not edit this file.  It is generated from data/apps.yaml
 * ...edit that file instead.
 */

var json = {
  "id": 0, 
  "data": {
    "description": "This is a landing page for Fedora Apps.  Fedora Infrastructure is <em>huge</em>; this page details only the public facing portion of it all.  Explore!\n"
  }, 
  "name": "Fedora Apps", 
  "children": [
    {
      "id": 1, 
      "data": {
        "description": "These are the apps that we're working on, but that aren't quite ready for prime-time yet.  Try and use them, and report bugs when they're broken -- it's a big help!. Check back here from time to time, as this section will change.\n"
      }, 
      "name": "In Development", 
      "children": [
        {
          "data": {
            "url": "http://koschei.cloud.fedoraproject.org", 
            "package_url": "http://koschei.cloud.fedoraproject.org/package/{package}", 
            "description": "Koschei is a continuous integration system for RPM packages. It tracks dependency changes done in Koji repositories and rebuilds packages whose dependencies change. It can help packagers to detect failures early and provide relevant information to narrow down the cause.\n"
          }, 
          "name": "Koschei", 
          "id": 2
        }, 
        {
          "data": {
            "url": "http://release-monitoring.org", 
            "package_url": "https://release-monitoring.org/projects/search/?pattern={package}", 
            "description": "Code named <a href=\"https://github.com/fedora-infra/anitya\">anitya</a>, this project is slated to replace <a href=\"https://fedoraproject.org/wiki/Upstream_Release_Monitoring\">the old wiki page</a> for Upstream Release Monitoring.  It will track upstream tarball locations and publish notifications to the fedmsg bus when new ones are found.  Other daemons will then be responsible for filing bugs, attempting to automatically build packages, perform some preliminary QA checks, etc..\n"
          }, 
          "name": "Release Monitoring", 
          "id": 3
        }, 
        {
          "data": {
            "url": "http://jenkins.cloud.fedoraproject.org", 
            "description": "Our own continuous integration (CI) service!  It works now and you can use it.. we just don't yet give it the same kind of guarantees that we give our other apps.  Look forwards to us promoting it soon..\n"
          }, 
          "name": "Jenkins", 
          "id": 4
        }, 
        {
          "data": {
            "url": "http://209.132.184.152/faitout/", 
            "description": "Provides access to temporary postgresql databases. This database can be used for unit-test thus reducing the differences between testing and production environment.\n"
          }, 
          "name": "faitout", 
          "id": 5
        }
      ]
    }, 
    {
      "id": 6, 
      "data": {
        "description": "Tools for sysadmins -- the people who run the servers that run Fedora (and otherwise).\n"
      }, 
      "name": "Infrastructure", 
      "children": [
        {
          "data": {
            "url": "https://geoip.fedoraproject.org", 
            "description": "A simple web service running <a href=\"https://github.com/fedora-infra/geoip-city-wsgi\">geoip-city-wsgi</a> that will return geoip information to you.\n"
          }, 
          "name": "GeoIP", 
          "id": 7
        }, 
        {
          "data": {
            "url": "http://fedoraproject.org/easyfix", 
            "description": "A list of easy-to-fix problems for the different projects in Fedora.  Interested in getting into helping out with sysadmin work or web application development?  This should be useful to you.\n"
          }, 
          "name": "Easyfix", 
          "id": 8
        }, 
        {
          "data": {
            "description": "DataGrepper is an HTTP API for querying the datanommer database.  You can use it to dig into the history of the <a href=\"http://fedmsg.com\">fedmsg</a> message bus.  You can grab events by username, by package, by message source, by topic... you name it.\n", 
            "user_url": "https://apps.fedoraproject.org/datagrepper/raw?user={user}", 
            "url": "https://apps.fedoraproject.org/datagrepper", 
            "package_url": "https://apps.fedoraproject.org/datagrepper/raw?package={package}", 
            "status_mappings": [
              "fedmsg"
            ], 
            "icon": "fedmsg.png"
          }, 
          "name": "DataGrepper", 
          "id": 9
        }, 
        {
          "data": {
            "url": "http://status.fedoraproject.org", 
            "description": "Sometimes the Fedora Infrastructure team messes up (or lightning strikes our datacenter(s)).  Sorry about that. You can use this website to check the status.  Is it \"down for everyone, or just me?\"<br/>Notice the favicon in your browser tab.  It changes based on the status, so if you keep this open you can check back to it at a glance.\n", 
            "icon": "status-good.png"
          }, 
          "name": "Status", 
          "id": 10
        }, 
        {
          "data": {
            "url": "http://mirrors.fedoraproject.org", 
            "icon": "downloads.png", 
            "description": "Fedora is distributed to millions of systems globally. This would not be possible without the donations of time, disk space, and bandwidth by hundreds of volunteer system administrators and their companies or institutions.  Your fast download experience is made possible by these donations.  The list on the <strong>MirrorManager</strong> site is dynamically generated every hour, listing only up-to-date mirrors.\n", 
            "status_mappings": [
              "mirrormanager", 
              "mirrorlist"
            ]
          }, 
          "name": "MirrorManager", 
          "id": 11
        }, 
        {
          "data": {
            "url": "http://admin.fedoraproject.org/nagios", 
            "description": "\"Is telia down?\"  The answer can most definitively be found here (and in detail).  The Fedora Infrastructure team uses Nagios to monitor the servers that serve Fedora.  Accessing most details requires membership in the <em>sysadmin</em> group.\n", 
            "icon": "nagios-logo.png"
          }, 
          "name": "Nagios", 
          "id": 12
        }, 
        {
          "data": {
            "url": "http://admin.fedoraproject.org/collectd/", 
            "description": "Tracks and displays statistics on the Fedora Infrastructure machines over time.  Useful for debugging ineffeciencies and problems.\n", 
            "icon": "collectd.png"
          }, 
          "name": "Collectd", 
          "id": 13
        }, 
        {
          "data": {
            "url": "http://admin.fedoraproject.org/haproxy/proxy1", 
            "description": "Shows the health of our proxies.  How many bytes? Concurrent sessions?  Health checks?\n"
          }, 
          "name": "HAProxy", 
          "id": 14
        }
      ]
    }, 
    {
      "id": 15, 
      "data": {
        "description": "Tools for testers -- the people who tell us its broken so we can fix it.\n"
      }, 
      "name": "QA", 
      "children": [
        {
          "data": {
            "url": "https://taskotron.fedoraproject.org", 
            "package_url": "https://taskotron.fedoraproject.org/resultsdb/results?item={package}", 
            "description": "Taskotron is a framework for automated task execution and is in the very early stages of development with the objective to replace AutoQA for automating selected QA tasks in Fedora.\n"
          }, 
          "name": "Taskotron", 
          "id": 16
        }, 
        {
          "data": {
            "url": "https://apps.fedoraproject.org/releng-dash/", 
            "description": "Track the status of the Fedora Release Engineering process. Did the latest rawhide get rsynced out?  How about for the secondary arches?  This read-only dashboard can help you make a quick check.\n"
          }, 
          "name": "Releng-Dash", 
          "id": 17
        }, 
        {
          "data": {
            "url": "https://retrace.fedoraproject.org", 
            "package_url": "https://retrace.fedoraproject.org/faf/reports/?component_names={package}", 
            "description": "The Problem Tracker is a platform for collecting and analyzing package crashes reported via ABRT (Automatic Bug Reporting Tool). It makes it easy to see what problems users are hitting the most, and allows you to filter them by Fedora release, associate, or component.\n"
          }, 
          "name": "Problem Tracker", 
          "id": 18
        }, 
        {
          "data": {
            "url": "http://qa.fedoraproject.org/blockerbugs", 
            "description": "The Fedora Blocker Bug Tracker tracks release blocking bugs and related updates in Fedora releases currently under development.\n", 
            "status_mappings": [
              "blockerbugs"
            ]
          }, 
          "name": "Blocker Bugs", 
          "id": 19
        }, 
        {
          "data": {
            "url": "http://bugzilla.redhat.com", 
            "package_url": "https://bugzilla.redhat.com/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&product=Fedora&product=Fedora%20EPEL&query_format=advanced&component={package}", 
            "description": "The Fedora Community makes use of a bugzilla instance run by Red Hat.  Notice something wrong with a Fedora package?  You can file an official bug here.\n", 
            "icon": "bugzilla.png"
          }, 
          "name": "Bugzilla", 
          "id": 20
        }, 
        {
          "data": {
            "url": "http://fedoraproject.org/PackageReviewStatus/", 
            "package_url": "https://bugzilla.redhat.com/buglist.cgi?component=Package%20Review&query_format=advanced&short_desc_type=allwordssubstr&short_desc={package}", 
            "description": "These pages contain periodically generated reports with information on the current state of all Fedora <strong>package review tickets</strong> -- a super useful window on bugzilla.\n"
          }, 
          "name": "Review Status", 
          "id": 21
        }, 
        {
          "data": {
            "url": "https://apps.fedoraproject.org/kerneltest", 
            "description": "As part of the <a href=\"https://fedoraproject.org/wiki/KernelTestingInitiative\">kernel testing initiative</a> we provide a webapp where users and automated systems can upload test results.  If you have access to hardware where we could catch tricky driver issues, your assistance here would be much appreciated.\n", 
            "icon": "tux.png"
          }, 
          "name": "Kerneltest", 
          "id": 22
        }
      ]
    }, 
    {
      "id": 23, 
      "data": {
        "description": "Tools for people -- so we can talk to each other and share content and ideas.\n"
      }, 
      "name": "Coordination", 
      "children": [
        {
          "data": {
            "url": "http://paste.fedoraproject.org", 
            "description": "Our very own pastebin server.  If you yum install the <strong>fpaste</strong> command, it will use this site automatically.\n", 
            "status_mappings": [
              "fedorapaste"
            ]
          }, 
          "name": "Paste", 
          "id": 24
        }, 
        {
          "data": {
            "url": "http://admin.fedoraproject.org/voting", 
            "description": "As a member of the community, you can now vote for the different steering committees and for this you will use the Election application.  Voting is a right and a duty as a member of the community; it is one of the things you can do to influence the development of Fedora.\n", 
            "status_mappings": [
              "elections"
            ]
          }, 
          "name": "Elections", 
          "id": 25
        }, 
        {
          "data": {
            "url": "https://apps.fedoraproject.org/nuancier", 
            "description": "Nuancier is a simple voting application for the supplementary wallpapers included in Fedora.\n", 
            "icon": "nuancier.png"
          }, 
          "name": "Nuancier", 
          "id": 26
        }, 
        {
          "data": {
            "url": "http://lists.fedoraproject.org", 
            "icon": "mail.png", 
            "description": "Mailing lists are used for communication within the community. There are lists for generic topics and lists more dedicated to a specific topic, there is for sure one for you.\n", 
            "status_mappings": [
              "mailinglists"
            ]
          }, 
          "name": "The Mailing lists", 
          "id": 27
        }, 
        {
          "data": {
            "url": "https://apps.fedoraproject.org/calendar", 
            "icon": "fedocal.png", 
            "description": "The Fedora Calendar (or <strong>fedocal</strong>), you might have already guessed, is a public calendar service.  You can create your own calendar, or subscribe to others.  Want to be kept abrest of releases, freezes, and events?  This is the tool for you.\n", 
            "status_mappings": [
              "fedocal"
            ]
          }, 
          "name": "FedoCal", 
          "id": 28
        }, 
        {
          "data": {
            "url": "https://meetbot.fedoraproject.org", 
            "icon": "meetbot.png", 
            "description": "Fedora Infrastructure runs a friendly IRC bot that you may know named <a href=\"https://fedoraproject.org/wiki/Zodbot\">zodbot</a>. Among its many and varied functions is logging IRC meetings, the archives of which you can find here.\n", 
            "status_mappings": [
              "zodbot"
            ]
          }, 
          "name": "Meetbot", 
          "id": 29
        }
      ]
    }, 
    {
      "id": 30, 
      "data": {
        "description": "Tools for <a href=\"https://fedoraproject.org/wiki/Staying_close_to_upstream_projects\">upstream</a> developers -- because we love you.\n"
      }, 
      "name": "Upstream", 
      "children": [
        {
          "data": {
            "url": "https://apps.fedoraproject.org/github2fedmsg", 
            "icon": "github.png", 
            "description": "github2fedmsg is a web service that bridges upstream development activity from <a href=\"https://github.com\">GitHub</a> into the <a href=\"http://fedmsg.com\">Fedora Infrastructure message bus</a>.  Visit the self-service dashboard to toggle the status of your repositories.\n", 
            "status_mappings": [
              "fedmsg"
            ]
          }, 
          "name": "github2fedmsg", 
          "id": 31
        }, 
        {
          "data": {
            "url": "http://fedorahosted.org", 
            "icon": "trac.png", 
            "description": "Fedora is dedicated to open source software. This commitment can extend beyond regular Fedora offerings.<br/> <strong>Fedora Hosted</strong> is our most feature rich hosting solution. It includes an scm, trac instance, release dir, account system for access control, etc. This is our most common hosting option.  When most groups want hosting, this is what they want.\n", 
            "status_mappings": [
              "fedorahosted"
            ]
          }, 
          "name": "Fedora Hosted", 
          "id": 32
        }
      ]
    }, 
    {
      "id": 33, 
      "data": {
        "description": "Tools for everybody -- use these things to manage your Fedora Account.\n"
      }, 
      "name": "Accounts", 
      "children": [
        {
          "data": {
            "url": "http://fedoraproject.org/membership-map/ambassadors.html", 
            "description": "Ambassadors are the representatives of Fedora. Ambassadors ensure the public understand Fedora's principles and the work that Fedora is doing. Additionally Ambassadors are responsible for helping to grow the contributor base, and to act as a liaison between other FLOSS projects and the Fedora community.\nThis thing is a map of where all the <a href=\"https://fedoraproject.org/wiki/Ambassadors\">Fedora Ambassadors</a> live showing just how vibrant the Fedora Community really is.  (It's easy to <a href=\"https://fedoraproject.org/wiki/Fedora_ambassadors_map\">add yourself</a> to the map too, if you can't find yourself on it.)\n"
          }, 
          "name": "Ambassadors Map", 
          "id": 34
        }, 
        {
          "data": {
            "url": "https://fedorapeople.org", 
            "user_url": "https://{user}.fedorapeople.org", 
            "description": "Being a community member you gain access to fedorapeople which provides you with a space on the web where you can upload files to share them with the community.\n", 
            "status_mappings": [
              "people"
            ]
          }, 
          "name": "FedoraPeople", 
          "id": 35
        }, 
        {
          "data": {
            "url": "http://admin.fedoraproject.org/accounts", 
            "user_url": "https://admin.fedoraproject.org/accounts/user/view/{user}",
            "description": "The Fedora Account System.  Update your profile information and apply for membership in groups.\n", 
            "status_mappings": [
              "fas"
            ]
          }, 
          "name": "FAS", 
          "id": 36
        }, 
        {
          "data": {
            "url": "https://apps.fedoraproject.org/notifications", 
            "icon": "fedmsg.png", 
            "description": "Centrally managed preferences for Fedora Infrastructure notifications to your inbox, irc client, and mobile device.\n", 
            "status_mappings": [
              "fedmsg"
            ]
          }, 
          "name": "Notifications", 
          "id": 37
        }, 
        {
          "id": 38, 
          "data": {
            "url": "https://badges.fedoraproject.org", 
            "icon": "badges.png", 
            "description": "An achievements system for Fedora Contributors!  \"Badges\" are awarded based on activity in the community.  Can you unlock them all? You can export your badges to Mozilla's <a href=\"http://openbadges.org\">Open Badges Infrastructure</a>\n", 
            "user_url": "https://badges.fedoraproject.org/user/{user}"
          }, 
          "name": "Badges", 
          "status_mappings": [
            "badges"
          ]
        }
      ]
    }, 
    {
      "id": 39, 
      "data": {
        "description": "Tools for wordsmiths -- the apps that store and archive the troves of content that Fedora authors produce.  Blog posts, the wiki, and more..\n"
      }, 
      "name": "Content", 
      "children": [
        {
          "data": {
            "url": "https://ask.fedoraproject.org/", 
            "icon": "ask_fedora.png", 
            "description": "Any question at all about Fedora?  Ask it here.\n", 
            "status_mappings": [
              "ask"
            ]
          }, 
          "name": "Ask Fedora", 
          "id": 40
        }, 
        {
          "data": {
            "url": "http://fedoraproject.org/wiki", 
            "status_mappings": [
              "wiki"
            ], 
            "description": "Maintain your own user profile page, contribute to documents about features, process, and governance.\n", 
            "icon": "mediawiki.png", 
            "user_url": "https://fedoraproject.org/wiki/User:{user}"
          }, 
          "name": "The Wiki", 
          "id": 41
        }, 
        {
          "data": {
            "url": "http://fedoramagazine.org", 
            "description": "Fedora Magazine is a WordPress-based site which delivers all the news of the Fedora Community. (It replaces the previous Fedora Weekly News.)\n", 
            "icon": "magazine.png"
          }, 
          "name": "Fedora Magazine", 
          "id": 42
        }, 
        {
          "data": {
            "url": "http://planet.fedoraproject.org", 
            "description": "The planet is a blog aggregator, a space accessible to you as a community member where you can express your opinion and talk about what you are doing for Fedora.\n", 
            "icon": "planet_logo.png"
          }, 
          "name": "The Planet", 
          "id": 43
        }, 
        {
          "data": {
            "url": "https://docs.fedoraproject.org", 
            "description": "RTFM!  Everything you could ever want to know. Probably the best place to find documentation about Fedora, including the changes between releases (and a big kudos to the translation teams to keep this resource up to date in the different languages!)\n", 
            "status_mappings": [
              "docs"
            ]
          }, 
          "name": "Docs", 
          "id": 44
        }
      ]
    }, 
    {
      "id": 45, 
      "data": {
        "description": "Tools for packagers -- where the pieces of the distribution get built.\n"
      }, 
      "name": "Packaging", 
      "children": [
        {
          "data": {
            "url": "https://apps.fedoraproject.org/packages", 
            "package_url": "https://apps.fedoraproject.org/packages/{package}", 
            "description": "A meta-app over the other packaging apps; the best place to find out what is in the Fedora repositories.  Which packages are present in which version, who is maintaining them, what patches have been applied, what bugs have been reported against them. All these kind of questions can be answered here. It is sometimes called \"Fedora Community v2\" after the old <a href=\"https://admin.fedoraproject.org/community\">Fedora Community</a> site.\n", 
            "status_mappings": [
              "packages"
            ]
          }, 
          "name": "Packages", 
          "id": 46
        }, 
        {
          "data": {
            "url": "https://apps.fedoraproject.org/tagger", 
            "package_url": "https://apps.fedoraproject.org/tagger/{package}", 
            "icon": "tagger.png", 
            "description": "Help build a tag cloud of all our packages.. It's actually really useful.  It'll help improve the search of the \"Packages\" webapp.\n", 
            "status_mappings": [
              "tagger"
            ]
          }, 
          "name": "Tagger", 
          "id": 47
        }, 
        {
          "data": {
            "url": "https://copr.fedoraproject.org", 
            "status_mappings": [
              "copr"
            ], 
            "description": "Copr is an easy-to-use automatic build system providing a package repository as its output.  You can make your **own** repositories!\n", 
            "icon": "copr.png", 
            "user_url": "https://copr.fedoraproject.org/coprs/{user}/"
          }, 
          "name": "COPR", 
          "id": 48
        }, 
        {
          "data": {
            "url": "https://admin.fedoraproject.org/pkgdb", 
            "package_url": "https://admin.fedoraproject.org/pkgdb/package/{package}/", 
            "user_url": "https://admin.fedoraproject.org/pkgdb/packager/{user}/", 
            "description": "Manage ACLs of your packages.\n", 
            "status_mappings": [
              "pkgdb"
            ]
          }, 
          "name": "PkgDB", 
          "id": 49
        }, 
        {
          "data": {
            "description": "Koji is the software that builds RPM packages for the Fedora project.  It uses Mock to create chroot environments to perform builds that are both safe and trusted.\n", 
            "user_url": "http://koji.fedoraproject.org/koji/userinfo?userID={user}", 
            "url": "http://koji.fedoraproject.org/koji", 
            "package_url": "http://koji.fedoraproject.org/koji/search?match=glob&type=package&terms={package}", 
            "status_mappings": [
              "koji"
            ], 
            "icon": "koji.png"
          }, 
          "name": "Koji", 
          "id": 50
        }, 
        {
          "data": {
            "description": "The tool you will use to push your packages to the Fedora repositories as an update, first an update to be tested (repository: updates-testing) then a stable update (repository: updates).  Behold -- the <em>Magic Cabbage.</em>\n", 
            "user_url": "https://admin.fedoraproject.org/updates/user/{user}", 
            "url": "https://admin.fedoraproject.org/updates", 
            "package_url": "https://admin.fedoraproject.org/updates/{package}", 
            "status_mappings": [
              "bodhi"
            ], 
            "icon": "bodhi.png"
          }, 
          "name": "Bodhi", 
          "id": 51
        }, 
        {
          "data": {
            "url": "http://pkgs.fedoraproject.org/cgit", 
            "package_url": "http://pkgs.fedoraproject.org/cgit/{package}.git", 
            "icon": "git-logo.png", 
            "description": "Ever wonder <em>exactly</em> what is in the new release of a Fedora package?  This is where the change histories of all the packages in Fedora for every release of Fedora (and EPEL) are kept.. forever!  A gold mine.\n", 
            "status_mappings": [
              "pkgs"
            ]
          }, 
          "name": "SCM", 
          "id": 52
        }, 
        {
          "data": {
            "url": "https://darkserver.fedoraproject.org", 
            "description": "A set of tools and JSON service to help userspace developers to debug their applications and libraries. People are be able query the service based on <a href=\"https://fedoraproject.org/wiki/Releases/FeatureBuildId\">build-id(s)</a> or rpm package names.\nYou can read more about <a href=\"https://fedoraproject.org/wiki/Darkserver\">why you might want to use it</a> or you can just click below to...\n", 
            "status_mappings": [
              "darkserver"
            ]
          }, 
          "name": "Darkserver", 
          "id": 53
        }
      ]
    }
  ]
}
