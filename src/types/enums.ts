enum EUserStatus {
  ACTIVE = "ACTIVE",
  UNACTIVE = "UNACTIVE",
  BANNED = "BANNED",
}
enum EUserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  EXPERT = "EXPERT",
}

enum ECourseStatus {
  APPROVE = "APPROVE",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

enum ECourseLevel {
  BEGINER = "BEGINER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

enum ELessonType {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
}

export { EUserRole, EUserStatus, ECourseStatus, ECourseLevel, ELessonType };
