/**
 * EXAMORA - Question Bank Data
 * Real academic questions for first-year engineering coursework.
 */

export const EXAMINATIONS = [
  {
    id: 'java-fundamentals',
    title: 'Java Fundamentals',
    shortDescription: 'Core object-oriented principles, JVM memory architecture, exceptions, and the collections framework.',
    category: 'Computer Science & Engineering',
    courseCode: 'CS101',
    durationMinutes: 15,
    durationSeconds: 900,
    difficulty: 'Core Foundational',
    accentColor: 'lavender', // pastel accent
    totalQuestions: 8,
    passScorePercentage: 60,
    overview: 'This examination assesses your conceptual understanding of Java memory allocation (Stack vs. Heap), object-oriented mechanisms like dynamic polymorphism, access specifiers, and exception hierarchies in the Java Virtual Machine.',
    topics: ['JVM Stack & Heap', 'Polymorphism & Inheritance', 'Interface Contracts', 'Exception Handling', 'String Pool Semantics'],
    questions: [
      {
        id: 'java-q1',
        number: 1,
        question: 'In Java memory architecture, where are local primitive variables and object references stored during method execution?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Heap memory along with class metadata' },
          { id: 'opt-b', label: 'B', text: 'Stack frame of the executing thread' },
          { id: 'opt-c', label: 'C', text: 'Metaspace memory area' },
          { id: 'opt-d', label: 'D', text: 'Shared String Constant Pool' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Local primitive variables and references to objects created inside a method are allocated directly in the executing thread’s stack frame. When the method returns, its stack frame is popped.'
      },
      {
        id: 'java-q2',
        number: 2,
        question: 'What is the outcome when two String literals with the same characters are declared (e.g., String a = "Exam"; String b = "Exam";)?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Two separate heap objects are allocated, so a == b evaluates to false' },
          { id: 'opt-b', label: 'B', text: 'Both reference the same canonical object in the String Constant Pool, so a == b evaluates to true' },
          { id: 'opt-c', label: 'C', text: 'A runtime compilation warning is thrown regarding duplicated strings' },
          { id: 'opt-d', label: 'D', text: 'The garbage collector immediately sweeps b as redundant' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'String literals in Java are interned into the String Constant Pool. Identical string literals point to the same memory address in the pool, making reference equality (==) evaluate to true.'
      },
      {
        id: 'java-q3',
        number: 3,
        question: 'Which of the following statements regarding Java interfaces in Java 8 and later is accurate?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Interfaces cannot contain any method implementations whatsoever' },
          { id: 'opt-b', label: 'B', text: 'Interfaces can define default and static methods with concrete bodies' },
          { id: 'opt-c', label: 'C', text: 'A class can implement only one interface while extending multiple abstract classes' },
          { id: 'opt-d', label: 'D', text: 'All interface variables are implicit private instance variables' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Starting in Java 8, interfaces can provide default method implementations using the "default" keyword as well as static utility methods without breaking implementing classes.'
      },
      {
        id: 'java-q4',
        number: 4,
        question: 'Which exception class serves as the checked root ancestor for exceptional conditions that a reasonable application should catch?',
        options: [
          { id: 'opt-a', label: 'A', text: 'java.lang.RuntimeException' },
          { id: 'opt-b', label: 'B', text: 'java.lang.Error' },
          { id: 'opt-c', label: 'C', text: 'java.lang.Exception (excluding RuntimeException subclasses)' },
          { id: 'opt-d', label: 'D', text: 'java.lang.Throwable without any differentiation' }
        ],
        correctAnswer: 'opt-c',
        explanation: 'Subclasses of Exception that do not extend RuntimeException are checked exceptions. The compiler mandates that they either be caught or declared in the throws clause.'
      },
      {
        id: 'java-q5',
        number: 5,
        question: 'What occurs during runtime when a subclass overrides a superclass method and it is called via a superclass reference variable?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Dynamic method dispatch executes the subclass implementation' },
          { id: 'opt-b', label: 'B', text: 'Static binding forces the superclass method to execute' },
          { id: 'opt-c', label: 'C', text: 'A ClassCastException is thrown immediately' },
          { id: 'opt-d', label: 'D', text: 'The Java compiler duplicates both methods at bytecode generation' }
        ],
        correctAnswer: 'opt-a',
        explanation: 'Java resolves non-static, non-final method calls dynamically at runtime based on the actual object type (polymorphism / virtual method invocation).'
      },
      {
        id: 'java-q6',
        number: 6,
        question: 'Which access modifier restricts member visibility strictly to the declaring class and its subclasses, even across different packages?',
        options: [
          { id: 'opt-a', label: 'A', text: 'package-private (default no modifier)' },
          { id: 'opt-b', label: 'B', text: 'protected' },
          { id: 'opt-c', label: 'C', text: 'private' },
          { id: 'opt-d', label: 'D', text: 'public with sealed permits' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'The protected modifier allows access within the same package, plus access by subclasses located in other packages through inheritance.'
      },
      {
        id: 'java-q7',
        number: 7,
        question: 'What is the primary difference between ArrayList and LinkedList in the Java Collections Framework?',
        options: [
          { id: 'opt-a', label: 'A', text: 'ArrayList provides O(1) random indexed access; LinkedList provides O(1) insertions/deletions at ends' },
          { id: 'opt-b', label: 'B', text: 'ArrayList is inherently synchronized while LinkedList is unsynchronized' },
          { id: 'opt-c', label: 'C', text: 'LinkedList cannot store null elements while ArrayList permits them' },
          { id: 'opt-d', label: 'D', text: 'ArrayList implements the Queue interface directly' }
        ],
        correctAnswer: 'opt-a',
        explanation: 'ArrayList is backed by a contiguous resizable array, offering constant time O(1) positional read access. LinkedList consists of doubly linked nodes, excelling at node insertions once positioned.'
      },
      {
        id: 'java-q8',
        number: 8,
        question: 'What is guaranteed by the `finally` block in a Java try-catch-finally construct?',
        options: [
          { id: 'opt-a', label: 'A', text: 'It executes only when an uncaught exception is thrown' },
          { id: 'opt-b', label: 'B', text: 'It executes regardless of whether an exception occurs or is caught, barring System.exit()' },
          { id: 'opt-c', label: 'C', text: 'It suppresses any return statement issued inside the try block unconditionally' },
          { id: 'opt-d', label: 'D', text: 'It is executed asynchronously on a distinct daemon thread' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'The finally block executes whether an exception was thrown or handled, making it ideal for resource cleanups (closing files, streams, and sockets).'
      }
    ]
  },
  {
    id: 'dbms-architecture',
    title: 'Database Management Systems',
    shortDescription: 'Relational algebra, normal forms, transaction ACID properties, indexing, and SQL query mechanics.',
    category: 'Information & Systems',
    courseCode: 'CS102',
    durationMinutes: 15,
    durationSeconds: 900,
    difficulty: 'Core Foundational',
    accentColor: 'yellow',
    totalQuestions: 8,
    passScorePercentage: 60,
    overview: 'This test covers fundamental relational database topics: primary & foreign key constraints, normalization up to BCNF, transaction atomicity and isolation, B+ Tree index structures, and relational algebra operators.',
    topics: ['Relational Integrity', 'Normalization (1NF-BCNF)', 'ACID Guarantees', 'B+ Tree Indexing', 'SQL Joins & Optimization'],
    questions: [
      {
        id: 'db-q1',
        number: 1,
        question: 'Which ACID property guarantees that all operations within a database transaction either execute to full completion or are completely rolled back?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Consistency' },
          { id: 'opt-b', label: 'B', text: 'Atomicity' },
          { id: 'opt-c', label: 'C', text: 'Isolation' },
          { id: 'opt-d', label: 'D', text: 'Durability' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Atomicity ensures that a transaction is treated as an indivisible unit of work: either all updates are committed, or none persist upon failure.'
      },
      {
        id: 'db-q2',
        number: 2,
        question: 'A relational table is in Second Normal Form (2NF) if and only if it is in 1NF and satisfies which additional condition?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Every non-prime attribute is non-transitively dependent on the primary key' },
          { id: 'opt-b', label: 'B', text: 'Every non-prime attribute is fully functionally dependent on the entire primary key' },
          { id: 'opt-c', label: 'C', text: 'Every determinant is a candidate key' },
          { id: 'opt-d', label: 'D', text: 'All multi-valued dependencies are eliminated' }
        ],
        correctAnswer: 'opt-b',
        explanation: '2NF requires eliminating partial functional dependencies: no non-prime attribute may depend on only a subset of any candidate composite key.'
      },
      {
        id: 'db-q3',
        number: 3,
        question: 'Why are B+ Trees predominantly preferred over standard binary search trees or hash indexes for disk-based database indexes?',
        options: [
          { id: 'opt-a', label: 'A', text: 'They eliminate the need for primary keys entirely' },
          { id: 'opt-b', label: 'B', text: 'High fanout minimizes disk I/O, and linked leaf nodes allow efficient range queries' },
          { id: 'opt-c', label: 'C', text: 'They store identical key data exclusively in volatile cache memory' },
          { id: 'opt-d', label: 'D', text: 'Hash indexes cannot perform point lookups in O(1)' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'B+ Trees have wide node capacity matching disk page sizes to minimize disk block reads. All data pointers reside in leaf nodes connected by a linked list, facilitating fast sequential range scans.'
      },
      {
        id: 'db-q4',
        number: 4,
        question: 'What relational algebra operator corresponds to filtering rows based on a specified boolean predicate condition (e.g., σ_age > 18)?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Projection (π)' },
          { id: 'opt-b', label: 'B', text: 'Selection (σ)' },
          { id: 'opt-c', label: 'C', text: 'Cartesian Product (×)' },
          { id: 'opt-d', label: 'D', text: 'Division (÷)' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Selection (represented by the Greek letter sigma σ) extracts tuples (rows) from a relation that satisfy a given selection condition.'
      },
      {
        id: 'db-q5',
        number: 5,
        question: 'Under standard ANSI SQL transaction isolation levels, what concurrency phenomenon occurs when Transaction A re-reads a set of rows and finds new rows committed by Transaction B?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Dirty Read' },
          { id: 'opt-b', label: 'B', text: 'Non-repeatable Read' },
          { id: 'opt-c', label: 'C', text: 'Phantom Read' },
          { id: 'opt-d', label: 'D', text: 'Lost Update' }
        ],
        correctAnswer: 'opt-c',
        explanation: 'A Phantom Read occurs when a transaction queries a range of rows matching a criteria, and another transaction inserts or deletes matching records before the first transaction finishes.'
      },
      {
        id: 'db-q6',
        number: 6,
        question: 'What does the referential integrity constraint enforce in a relational schema?',
        options: [
          { id: 'opt-a', label: 'A', text: 'A foreign key value must either match an existing primary key in the referenced relation or be null' },
          { id: 'opt-b', label: 'B', text: 'No attribute in any primary key can ever accept a zero value' },
          { id: 'opt-c', label: 'C', text: 'Every table must possess at least two candidate keys' },
          { id: 'opt-d', label: 'D', text: 'Cascading deletes must be disabled unconditionally by the database engine' }
        ],
        correctAnswer: 'opt-a',
        explanation: 'Referential integrity requires that foreign key references correspond to valid, existing primary key values in the target referenced table, preventing orphaned records.'
      },
      {
        id: 'db-q7',
        number: 7,
        question: 'What is the primary distinction between Boyce-Codd Normal Form (BCNF) and Third Normal Form (3NF)?',
        options: [
          { id: 'opt-a', label: 'A', text: '3NF permits non-prime attributes to be determinants, while BCNF strictly forbids it' },
          { id: 'opt-b', label: 'B', text: 'In BCNF, for every functional dependency X → Y, X must be a superkey without exception' },
          { id: 'opt-c', label: 'C', text: 'BCNF guarantees preservation of all functional dependencies, unlike 3NF' },
          { id: 'opt-d', label: 'D', text: 'BCNF is strictly weaker than 3NF and applies only to numeric columns' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'In 3NF, X → Y is allowed if Y is a prime attribute even if X is not a superkey. BCNF tightens this by strictly requiring that X must be a superkey for every non-trivial functional dependency.'
      },
      {
        id: 'db-q8',
        number: 8,
        question: 'Which SQL statement clause is evaluated after grouping rows to filter aggregated group results?',
        options: [
          { id: 'opt-a', label: 'A', text: 'WHERE' },
          { id: 'opt-b', label: 'B', text: 'HAVING' },
          { id: 'opt-c', label: 'C', text: 'ORDER BY' },
          { id: 'opt-d', label: 'D', text: 'PARTITION BY' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'WHERE filters individual tuples before GROUP BY runs; the HAVING clause filters groups created by the GROUP BY aggregate operations.'
      }
    ]
  },
  {
    id: 'computer-networks',
    title: 'Computer Networks',
    shortDescription: 'OSI reference layers, TCP/UDP transport protocol mechanics, IPv4/v6 subnetting, routing, and DNS architecture.',
    category: 'Systems & Infrastructure',
    courseCode: 'CS103',
    durationMinutes: 15,
    durationSeconds: 900,
    difficulty: 'Core Foundational',
    accentColor: 'sage',
    totalQuestions: 8,
    passScorePercentage: 60,
    overview: 'This examination evaluates core networking concepts: the 7-layer OSI model, transport layer reliability via the TCP 3-way handshake, IP packet routing, subnet mask calculation, and application protocols.',
    topics: ['OSI & TCP/IP Model', 'TCP Handshake & Congestion Control', 'CIDR Subnetting', 'ARP & Address Resolution', 'DNS Hierarchy & HTTP/3'],
    questions: [
      {
        id: 'net-q1',
        number: 1,
        question: 'At which OSI layer does the Internet Protocol (IP) operate, handling logical addressing and best-effort packet routing?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Data Link Layer (Layer 2)' },
          { id: 'opt-b', label: 'B', text: 'Network Layer (Layer 3)' },
          { id: 'opt-c', label: 'C', text: 'Transport Layer (Layer 4)' },
          { id: 'opt-d', label: 'D', text: 'Session Layer (Layer 5)' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'The Network Layer (Layer 3) handles end-to-end packet routing across networks, logical IP addressing, and path determination.'
      },
      {
        id: 'net-q2',
        number: 2,
        question: 'What is the correct sequence of TCP flag packets exchanged during a standard three-way handshake connection establishment?',
        options: [
          { id: 'opt-a', label: 'A', text: 'SYN → SYN-ACK → ACK' },
          { id: 'opt-b', label: 'B', text: 'ACK → SYN → ACK-SYN' },
          { id: 'opt-c', label: 'C', text: 'FIN → ACK → FIN-ACK' },
          { id: 'opt-d', label: 'D', text: 'RST → SYN → ACK' }
        ],
        correctAnswer: 'opt-a',
        explanation: 'The client sends a SYN packet, the server responds with a SYN-ACK packet, and the client finishes handshake synchronization by sending an ACK packet.'
      },
      {
        id: 'net-q3',
        number: 3,
        question: 'Given an IPv4 subnet of 192.168.10.0/26, how many usable host IP addresses are available for allocation to network devices?',
        options: [
          { id: 'opt-a', label: 'A', text: '64 host addresses' },
          { id: 'opt-b', label: 'B', text: '62 host addresses' },
          { id: 'opt-c', label: 'C', text: '30 host addresses' },
          { id: 'opt-d', label: 'D', text: '126 host addresses' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'A /26 subnet leaves 32 - 26 = 6 host bits, giving 2^6 = 64 total addresses. Subtracting the network address (.0) and broadcast address (.63) leaves 62 usable host addresses.'
      },
      {
        id: 'net-q4',
        number: 4,
        question: 'Which protocol is responsible for resolving a known logical IP address to a physical MAC address within a local broadcast domain?',
        options: [
          { id: 'opt-a', label: 'A', text: 'DNS (Domain Name System)' },
          { id: 'opt-b', label: 'B', text: 'ARP (Address Resolution Protocol)' },
          { id: 'opt-c', label: 'C', text: 'DHCP (Dynamic Host Configuration Protocol)' },
          { id: 'opt-d', label: 'D', text: 'BGP (Border Gateway Protocol)' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'ARP broadcasts an inquiry on the local network segment requesting the physical MAC hardware address associated with a given target IP address.'
      },
      {
        id: 'net-q5',
        number: 5,
        question: 'Why does UDP have significantly lower protocol latency compared to TCP for applications like real-time voice and video gaming?',
        options: [
          { id: 'opt-a', label: 'A', text: 'UDP operates directly at the physical layer without packet frames' },
          { id: 'opt-b', label: 'B', text: 'UDP is connectionless, omitting handshake negotiation, ordered reassembly, and retransmissions' },
          { id: 'opt-c', label: 'C', text: 'UDP packets automatically compress application payloads by 50%' },
          { id: 'opt-d', label: 'D', text: 'Routers give higher queuing priority to UDP datagrams by default' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'UDP avoids connection setup delays (no 3-way handshake), flow/congestion control overhead, and retransmission delays, making it ideal for time-sensitive streams.'
      },
      {
        id: 'net-q6',
        number: 6,
        question: 'What is the function of the Time-to-Live (TTL) field in an IPv4 packet header?',
        options: [
          { id: 'opt-a', label: 'A', text: 'To record the exact round-trip timestamp of the sender' },
          { id: 'opt-b', label: 'B', text: 'To prevent packets from endlessly looping in the network by decrementing at each hop' },
          { id: 'opt-c', label: 'C', text: 'To enforce a maximum bandwidth limit on the sender' },
          { id: 'opt-d', label: 'D', text: 'To synchronize TCP window sizes across asynchronous routers' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Each intermediate router decrements the TTL by at least 1. If TTL hits 0, the packet is discarded and an ICMP Time Exceeded message is sent back, terminating routing loops.'
      },
      {
        id: 'net-q7',
        number: 7,
        question: 'In standard DNS hierarchy resolution, what type of DNS query instructs the server to return the definitive answer or an error, rather than a referral to another server?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Iterative query' },
          { id: 'opt-b', label: 'B', text: 'Recursive query' },
          { id: 'opt-c', label: 'C', text: 'Inverse pointer lookup' },
          { id: 'opt-d', label: 'D', text: 'Anycast query' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'In a recursive query, the resolver delegates the duty to the local DNS server to track down the full resolution chain and return the final answer.'
      },
      {
        id: 'net-q8',
        number: 8,
        question: 'Which transmission mechanism does TCP use to prevent a fast sender from overwhelming a slower receiver’s internal buffer?',
        options: [
          { id: 'opt-a', label: 'A', text: 'Slow Start algorithm' },
          { id: 'opt-b', label: 'B', text: 'Sliding Flow Control Window (Advertised Window)' },
          { id: 'opt-c', label: 'C', text: 'Exponential backoff timeout' },
          { id: 'opt-d', label: 'D', text: 'Fast Retransmit' }
        ],
        correctAnswer: 'opt-b',
        explanation: 'Flow control in TCP is maintained via the receiver advertising its remaining buffer space (receive window size, rwnd) in ACKs, restricting how many unacknowledged bytes the sender may transmit.'
      }
    ]
  }
];

export const getExamById = (id) => {
  return EXAMINATIONS.find((exam) => exam.id === id) || null;
};
