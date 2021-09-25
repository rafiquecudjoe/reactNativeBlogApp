import React from 'react'

export default function Text(waysoftext) {

    const waysText = { info:
    `The role of a software engineer is to solve complex problems.Ideally, SEs discover and analyze requirements and employ best practices, design patterns, code, runtimes, frameworks, APIs, and libraries to deliver simplified yet comprehensive solutions while reducing the potential for future challenges.
     Sofware engineering as a discipline requires strong critical thinking, attention to detail, coding proficiency, and discipline to maintain a constant learning rate.
     Knowledge and experience distinguish SEs, yet the constituting number of roles or projects often varies.Improving as an SE requires expanding both of these areas.
     Here I’ve included several practices and areas I’ve found to be highly effective for immediate improvement, respectively.
     
     Prioritize Reading
     
     Read as much and as often as possible though not intending to memorize information but to gain greater understanding cumulatively.There are numerous Definitive Guides, Mastering Series, Introduction to, Common Sense, and Must Know titled books for any language, framework, pattern, or runtime you can find.The best of these titles appropriately represent both the breadth and depth of the subject.
     Medium is an excellent resource to find more focused reading within topics across the broad spectrum of software engineering — stories dedicated to specific components or facets of more general subjects.
            It’s often the case in our day- to - day duties that implementing a particular technology to the full extent of its capabilities lies outside the scope of the proposed solution or beyond the necessary complexity threshold.Nonetheless, knowledge of these functions is of benefit given the appropriate requirements.In my experience, lack of expertise has resulted in as many sub - optimal solutions as rigid technical limitations.
     As an aside, I don’t necessarily recommend note - taking, given the intent outlined in this section.In my opinion, there is a point of diminishing returns with traditional note - taking.I believe you’re sacrificing your rate of exposure for a potentially unrealized increase in retention.If anything, I would suggest substituting traditional notes with short string references to the topic proper, one or two words though specific enough to elicit a first - page Google result.You may find this significantly more efficient.
     
        Reduce, Reuse, Refactor
     
     If you’ve written code given the opportunity, refactor it.Better yet, you must refactor your code or discard it where possible.If you’ve assumed ownership of a codebase, study it until you can confidently remove anything rotten, either discarding it, refactoring it, or replacing it with library functionality.
     Refactoring often presents opportunities to act upon newly acquired domain knowledge or language features in addition to introducing potential performance improvements.Examples include optional chaining, nullish coalescing, immutable variables, pure functions, or async / await promise handling.You might also reassess your implemented data structures to prefer dictionaries or objects over arrays, for instance.
     Coding is the most effective way to improve your coding ability.If you’re not actively writing new code or in the position to refactor existing code, I recommend you find code to review.Ideally, within your environment, perhaps your colleagues, or even from other projects or required libraries.Understanding good code is a step towards producing it.
     
     Remember to Feed Your Pets
     
     If you don’t already have a pet project or have a specific project idea, you can clone one.There are several public Git repos with template code for social media or on - demand delivery apps.
     Pet projects are excellent testbeds for greater familiarity with design patterns, frameworks, or languages(dynamically typed vs.inferred or statically typed, for instance) and API consumption.For example, Google Firebase, PubNub, and Vonage offer free service tiers for their public service APIs.If you’re not familiar, Firebase is a BaaS(Backend - as - a - Service) platform that provides authentication, object storage, and remote function execution(Function-as - a - Service), among other services.
     PubNub offers an API and SDK for real - time location tracking and messaging, and Vonage provides an API for SMS messaging.All of which are now ubiquitous features of many modern applications.
     API consumption lends itself to the consideration and implementation of abstraction, code maintainability, and modularity.All of which are characteristics of quality code and design.
     
    Plan in Advance to Avoid Unplanned Downtime
     
     Identify and solve the problem first, then build the solution.There’s often a knee - jerk response to start building: coding, installing binaries, or modifying configuration elements during the beginning stages of a project.I’ve witnessed organizations that subscribe to fail fast and agile - like development practices unintentionally enable this behavior by lessening the importance of planning and design.
     The costs associated with insufficient planning and or a sub - optimal design only increase as your solution progresses through its lifecycle.Again design considerations such as abstraction, the implementation of common design patterns, and error - handling are common areas to improve your solution’s quality.
     As you progress to the build stage, proper test coverage can significantly reduce undesired outcomes in code.If a function, component, API, etc., is essential, it should have a unit test, preferably a scheduled and automated one.
     
     Emphasize Communication
     
     Ineffective communication is the shortest path to a sub - optimal, or worse, unusable solution.Be wary of informal requirements gathering, sparse requirements documentation, and limited shareholder representation.These are common leading indicators of adverse outcomes.
     When possible, push back on non - quantifiable outcomes or metrics, clarify any ambiguous data, and request and document acknowledgment of design or implementation caveats.
     
     The Returned Value
     
     To recap, read daily to increase your domain knowledge, frequently refactor your codebase, communicate clearly, and document it.
     Develop pet projects, prioritize planning, and execute tests for anything important.Increase your capability as a software engineer, and you improve the quality and resiliency of the solutions you deliver.
     Thanks for reading.`}
    return (
        <View>
            <Text>
                {waysoftext}
            </Text>
            
        </View>
    )
}
